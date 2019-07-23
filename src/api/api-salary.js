import { api } from './api'

export const apiSalary = {
  getSalaryByUser: (user_id) => {
    return api.post('salary/get-salary-by-user', {user_id})
  },

  createSalary: (data)=>{
    return api.post('salary/create-salary', {...data})
  }
}
