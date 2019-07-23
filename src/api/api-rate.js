import { api } from './api'

export const apiRate = {
  create: (user, type, example_training, teacher_user, star, description) => {
    return api.post('rate/create-rate', {
      user_id: user,
      teacher_user,
      star,
      description,
      example_training,
      type
    })
  },

  getRates: (type, example_training, teacher_user) => {
    return api.post('rate/get-rates', { type, example_training, teacher_user })
  }
}
