import { api } from './api'

export const apiBill = {
  create: (service_option_id, subtotal, status, user_id) => {
    return api.post('bill/create-bill', {
        service_option_id,
        subtotal,
        status,
        user_id
    })
  },

  getBillByUser: (user_id) => {
    return api.post('bill/get-bill-by-user', {user_id})
  }
}
