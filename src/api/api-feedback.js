import { api } from './api'

export const apiFeedback = {
  create: (user,description) => {
    return api.post('feedback/create-feedback', {
      user_id: user,
      description
    })
  },

  getFeedbacks: () => {
    return api.get('feedback/get-feedbacks')
  }
}
