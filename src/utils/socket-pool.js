
import { socketUrl2 } from '../api/api';
const io = require('socket.io-client');
export const socket = io(socketUrl2);