import { socketUrl1 } from '../api/api'

let WebRTC = null;

WebRTC = require('react-native-webrtc');


let socket = null;
let onFriendLeftCallback = null;
let onFriendConnectedCallback = null;
let onDataChannelMessageCallback = null;


const socketIOClient = require('socket.io-client');
socket = socketIOClient(socketUrl1, { transports: ['websocket'], jsonp: false });

var configuration = {
  "iceServers": [
    { url: 'stun:stun01.sipphone.com' },
    { url: 'stun:stun.ekiga.net' },
    { url: 'stun:stun.fwdnet.net' },
    { url: 'stun:stun.ideasip.com' },
    { url: 'stun:stun.iptel.org' },
    { url: 'stun:stun.rixtelecom.se' },
    { url: 'stun:stun.schlund.de' },
    { url: 'stun:stun.l.google.com:19302' },
    { url: 'stun:stun1.l.google.com:19302' },
    { url: 'stun:stun2.l.google.com:19302' },
    { url: 'stun:stun3.l.google.com:19302' },
    { url: 'stun:stun4.l.google.com:19302' },
    { url: 'stun:stunserver.org' },
    { url: 'stun:stun.softjoys.com' },
    { url: 'stun:stun.voiparound.com' },
    { url: 'stun:stun.voipbuster.com' },
    { url: 'stun:stun.voipstunt.com' },
    { url: 'stun:stun.voxgratia.org' },
    { url: 'stun:stun.xten.com' },
    {
      url: 'turn:numb.viagenie.ca',
      credential: 'muazkh',
      username: 'webrtc@live.com'
    },
    {
      url: 'turn:192.158.29.39:3478?transport=udp',
      credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      username: '28224511:1379330808'
    },
    {
      url: 'turn:192.158.29.39:3478?transport=tcp',
      credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      username: '28224511:1379330808'
    }
  ]
};
var peerConnections = {}; //map of {socketId: socket.io id, RTCPeerConnection}
let localStream = null;
let friends = null; //list of {socketId, name}
let me = null; //{socketId, name}

function createPeerConnection(friend, isOffer, onDataChannelMessage) {
  let socketId = friend.socketId;
  var retVal = new WebRTC.RTCPeerConnection(configuration);

  peerConnections[socketId] = retVal;

  retVal.onicecandidate = function (event) {
    console.log('onicecandidate');
    if (event.candidate) {
      socket.emit('exchange', { 'to': socketId, 'candidate': event.candidate });
    }
  };

  function createOffer() {
    console.log('createdoffer', retVal);
    retVal.createOffer().then(desc => {
      retVal.setLocalDescription(desc).then(() => {
        console.log('setLocalDescription', retVal.localDescription);
        socket.emit('exchange', { 'to': socketId, 'sdp': retVal.localDescription });
      }).catch(err => console.log(err));
    }).catch(e => console.log(e))

  }

  retVal.onnegotiationneeded = function () {
    console.log('onnegotiationneeded');
    if (isOffer) {
      createOffer();
    }
  }

  retVal.oniceconnectionstatechange = function (event) {
    console.log('oniceconnectionstatechange');
    if (event.target.iceConnectionState === 'connected') {
      createDataChannel();
    }
  };

  retVal.onsignalingstatechange = function (event) {
    console.log('onsignalingstatechange');
  };

  retVal.onaddstream = function (event) {
    console.log('onaddstream');
    if (onFriendConnectedCallback != null) {
      onFriendConnectedCallback(socketId, event.stream, friend);
    }
  };

  retVal.addStream(localStream);

  function createDataChannel() {
    if (retVal.textDataChannel) {
      return;
    }
    var dataChannel = retVal.createDataChannel("text");

    dataChannel.onerror = function (error) {
      console.log("dataChannel.onerror", error);
    };

    dataChannel.onmessage = function (event) {
      console.log("dataChannel.onmessage:", event.data);
      if (onDataChannelMessageCallback != null) {
        onDataChannelMessageCallback(JSON.parse(event.data));
      }
    };

    dataChannel.onopen = function () {
      console.log('dataChannel.onopen');
    };

    dataChannel.onclose = function () {
      console.log("dataChannel.onclose");
    };

    retVal.textDataChannel = dataChannel;
  }

  return retVal;
}

function exchange(data) {
  var fromId = data.from;
  var pc;
  if (fromId in peerConnections) {
    pc = peerConnections[fromId];
  } else {
    let friend = friends.filter((friend) => friend.socketId == fromId)[0];
    if (friend == null) {
      friend = {
        socketId: fromId,
        name: ""
      }
    }
    pc = createPeerConnection(friend, false);
  }

  if (data.sdp) {
    pc.setRemoteDescription(new WebRTC.RTCSessionDescription(data.sdp)).then(() => {
      if (pc.remoteDescription.type == "offer") {
        pc.createAnswer().then(desc => {
          pc.setLocalDescription(desc).then(() => {
            socket.emit('exchange', { 'to': fromId, 'sdp': pc.localDescription });
          }).catch(e1 => console.log('e1,: ', e1))
        }).catch(e2 => console.log('e2,: ', e2))
      }
    }).catch(e3 => console.log('e1,: ', e3))
  } else {
    //console.log('exchange candidate', data);
    pc.addIceCandidate(new WebRTC.RTCIceCandidate(data.candidate));
  }
}

function leave(socketId) {
  console.log('leave', socketId);
  var pc = peerConnections[socketId];
  if (pc) {
    pc.close();
    delete peerConnections[socketId];
    if (onFriendLeftCallback != null) {
      onFriendLeftCallback(socketId);
    }
  }
}

socket.on('exchange', function (data) {
  exchange(data);
});

socket.on('leave', function (socketId) {
  console.log('leave')
  leave(socketId);
});

socket.on('connect', function (data) {
  console.log('connect');
});

socket.on("join", function (friend) {
  //new friend:
  friends.push(friend);
  console.log("New friend joint conversation: ", friend);
});

function logError(error) {
  console.log("logError", error);
}

function countFriends(roomId, callback) {
  socket.emit("count", roomId, (count) => {
    console.log("Count friends result: ", count);
    callback(count);
  });
}

function loadLocalStream2(muted) {
  navigator.getUserMedia({ "audio": true, "video": true }, function (stream) {
    localStream = stream;
    var selfView = document.getElementById("selfView");
    selfView.src = URL.createObjectURL(stream);
    selfView.muted = muted;
  }, logError);
}

function getLocalStream(isFront, callback) {
  WebRTC.mediaDevices.enumerateDevices().then(sourceInfos => {
    let videoSourceId;
    for (let i = 0; i < sourceInfos.length; i++) {
      const sourceInfo = sourceInfos[i];
      if (sourceInfo.kind == "video" && sourceInfo.facing == (isFront ? "front" : "back")) {
        videoSourceId = sourceInfo.id;
      }
    }
    WebRTC.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          minWidth: 500, // Provide your own width, height and frame rate here
          minHeight: 300,
          minFrameRate: 30
        },
        facingMode: (isFront ? "user" : "environment"),
        optional: (videoSourceId ? [{ sourceId: videoSourceId }] : [])
      }
    })
      .then(stream => {
        localStream = stream;
        callback(stream);
      })
      .catch(error => {
        // Log error
      });
  });
}

function broadcastMessage(message) {
  for (var key in peerConnections) {
    var pc = peerConnections[key];
    pc.textDataChannel.send(JSON.stringify(message));
  }
}

/**
 *
 * callbacks: {
 *    joined: function of () => {},
 *    friendConnected: (socketId, stream) => {},
 *    friendLeft: (socketId) => {},
 *    dataChannelMessage: (message) => {}
 * }
 *
 */
function join(roomId, name, callbacks) {
  onFriendLeftCallback = callbacks.friendLeft;
  onFriendConnectedCallback = callbacks.friendConnected;
  onDataChannelMessageCallback = callbacks.dataChannelMessage;
  socket.emit('join', { roomId, name }, function (result) {
    friends = result;
    console.log('Joins', friends);
    console.log('callbacks', callbacks.joined);
    friends.forEach((friend) => {
      createPeerConnection(friend, true);
    });
    if (callbacks.joined != null) {
      me = {
        socketId: socket.id,
        name: name
      }
      callbacks.joined();
    }
  });
}
//------------------------------------------------------------------------------
// Exports
module.exports = {
  join,
  countFriends,
  getLocalStream,
  broadcastMessage,
  socket
}
