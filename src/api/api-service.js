import { api } from './api'

export const apiService = {
  getListService: () => {
    return api.get(`service/get-services`)
  },

  registerServices: (user_id, shifts)=>{
    return api.post(`user/register-service`, { user_id, shifts})
  },

  getListServiceOfUser: (user_id) => {
    return api.post(`user/get-services-of-user`, {user_id})
  },
}
