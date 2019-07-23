import { api } from './api'

export const apiExampleTraining = {
  create: (user_id, lesson_id, title, description) => {
    return api.post('example-training/create-example-training', {
      user_id,
      lesson_id,
      title,
      description
    })
  },

  uploadFile: data => {
    return api.postImage('example-training/upload-file', data)
  },

  getExampleTrainings: () => {
    return api.get('example-training/get-example-trainings')
  },

  getExampleTrainingsOfUser: (user_id) => {
    return api.post('example-training/get-example-trainings-user', {user_id})
  },
  update: (example_id,lesson_id, title, description) => {
    return api.post('example-training/update-example-training', {
      example_id,
      lesson_id,
      title,
      description
    })
  },
  delete: (example_id) => {
    return api.post('example-training/delete-example-training', {
      example_id
    })
  },

  getExampleTrainingsOfLesson: (lesson_id) => {
    return api.post('example-training/get-example-training-lesson', {lesson_id})
  },

  ///get-example-training-lesson

  //update-example-training
}
