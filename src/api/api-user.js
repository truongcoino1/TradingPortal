import { api } from './api'

export const apiUser = {
  getUserDetail: (userId: string) => {
    return api.post(`user/get-profile`, { user_id: userId })
  },
  updateProfile: data => {
    return api.post(`user/update-profile`, { ...data })
  },

  updateAvatar: data => {
    return api.postImage('user/upload-avatar', data)
  },

  getListCoach: ()=>{
    return api.get(`user/get-list-coach`)
  },

  getListStudent: ()=>{
    return api.get(`user/get-list-student`)
  },

  updateServiceUser:(user_id)=>{
    return api.post('user/used-service', { user_id })
  },

  uploadProfileInfo: data => {
    return api.postImage('user/upload-file-info', data)
  },

  createBodyInfo: data => {
    return api.post('user/create-body', data)
  },

  updateBodyInfo: data => {
    return api.post('user/update-body', data)
  },

  findBodyInfo: user_id => {
    return api.post('user/find-body', { user_id })
  },

  findBodyByShift: (shift, user_id) => {
    return api.post('user/find-body-by-shift', { shift, user_id })
  },
  //find-body-by-shift

  //find-body
}
