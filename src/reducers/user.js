import Types from '../actions/types'

const INITIAL_STATE = null

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SAVE_USER_DATA:
      return action.user
    case Types.CLEAR_USER_DATA:
      return INITIAL_STATE
    default:
      return state
  }
}
