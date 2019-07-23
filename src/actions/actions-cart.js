import Types from './types'

export function updateCart (cart) {
  return {
    type: Types.UPDATE_CART,
    cart
  }
}

export function clearCart () {
  return {
    type: Types.CLEAR_CART
  }
}
