'use strict'

import { user } from './user'
import { auth } from './auth'
import { cart } from './cart'

export const rootReducer = {
  user,
  auth,
  cart
}
