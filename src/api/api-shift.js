import { api } from './api'

export const apiShift = {
  getListShift: () => {
    return api.get(`shift/get-shift`)
  },

  getShiftByUser: user_id=>{
    return api.post(`shift/get-shift-by-user`, {user_id})
  },

  //get-shift-by-lesson
  getShiftByLesson: lesson_id=>{
    return api.post(`shift/get-shift-by-lesson`, {lesson_id})
  },

  createShift: (data)=>{
    return api.post(`shift/create-shift`, data)
  },

  updateShift: (data)=>{
    return api.post(`shift/update-shift`, data)
  },

  getShiftById: shift_id=>{
    return api.post(`shift/get-shift-by-id`, {shift_id})
  },
  //get-shift-by-id
  // createAccount: (account: Object) => api.postRaw('users', account),
  // editAccount: (username: string, account: Object) =>
  //   api.put(`users/${username}`, account)
}
