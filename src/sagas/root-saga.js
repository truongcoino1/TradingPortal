import { takeLatest } from 'redux-saga/effects'
import Types from '../actions/types'
import { requestUpdateAuth } from './auth-saga'

export function * rootSaga () {
  yield [takeLatest(Types.UPDATE_AUTH_DATA, requestUpdateAuth)]
}
