import Types from '../actions/types'

const INITIAL_STATE = []

export const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_CART:
      return action.cart
    case Types.CLEAR_CART:
      return INITIAL_STATE
    default:
      return state
  }
}
