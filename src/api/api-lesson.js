import { api } from './api'

export const apiLesson = {
//   create: (service_option_id, subtotal, status, user_id) => {
//     return api.post('bill/create-bill', {
//         service_option_id,
//         subtotal,
//         status,
//         user_id
//     })
//   },
create: (name, description) => {
  return api.post('lesson/create-lesson', {
      name, 
      description
  })
},

  getLessons: () => {
    return api.get('lesson/get-lesson')
  }
}
