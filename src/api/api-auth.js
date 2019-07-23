import { api } from './api'

export const apiAuth = {
  authenticate: (username, password) =>
    api.post('user/login', {
      username,
      password
    }),
  login: (username, password) => api.post('user/login', { username, password }),

  signup: (username, password, role) =>
    api.post('user/signup', { username, password, role }),

  logout: () => api.post('logout')
}
