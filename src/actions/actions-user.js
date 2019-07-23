import Types from './types'

export function saveUserData (user: Object) {
  return {
    type: Types.SAVE_USER_DATA,
    user
  }
}

export function refreshProfile () {
  return {
    type: Types.REFRESH_PROFILE
  }
}

export function clearUserData () {
  return {
    type: Types.CLEAR_USER_DATA
  }
}
