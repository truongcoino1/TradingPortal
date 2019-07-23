import Types from '../actions/types'

const INITIAL_STATE = null

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_AUTH_DATA:
      return action.auth
    case Types.UPDATED_AUTH:
      return action.auth
    default:
      return state
  }
}
