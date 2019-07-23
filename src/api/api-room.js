import { api } from './api'

export const apiRoom = {
  create: (room_name, room_size, description, teacher_user, from, to, shift) => {
    return api.post('room/create-room', {
      room_name,
      teacher_user,
      room_size,
      description,
      from,
      to,
      shift
    })
  },

  update: (room_name, room_size, description, from, to, room_id) => {
    return api.post('room/update-room', {
      room_id,
      room_name,
      room_size,
      description,
      from,
      to
    })
  },

  getRooms: (date) => {
    return api.post('room/get-room-by-date', {date})
  },

  checkCreateRoom: (user_id, start, end)=>{
    return api.post('room/check-create-room', {user_id, start, end})
  },

  joinRoom: (user_id, room_id)=>{
    return api.post('room/join-room', {user_id, room_id})
  },

  getRoomsByTeacher: (user_id) => {
    return api.post('room/get-room-by-teacher', {user_id})
  },
  //update-count

  updateCount: (room_id, count)=>{
    return api.post('room/update-count', {room_id, count})
  },
  //get-room-by-shift
  getRoomsByShift: (shift_id) => {
    return api.post('room/get-room-by-shift', {shift_id})
  },
}
