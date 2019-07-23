import { call, select, put } from 'redux-saga/effects'
// import { apiAuth } from '../api/api-auth'
import { setAccessToken } from '../api/api'
import { updatedAuth } from '../actions/actions-auth'
import { apiUser } from '../api/api-user'
import { saveUserData } from '../actions/actions-user'

export function * requestUpdateAuth (action) {
  try {
    const state = yield select()
    const { auth } = state
    // Check if auth data exist. If yes refresh the auth data.
    if (auth) {
      yield put(updatedAuth(auth))
      setAccessToken(auth.access_token)
      // const authData = yield call(apiAuth.refreshToken, auth.refresh_token)
      // console.log(authData)
      // if (authData.refresh_token) {
      //   // Refreshing token successfully, save the new auth data. Also set Access Token to the API:
      //   yield put(updatedAuth(authData))
      //   setAccessToken(authData.access_token)
      // }
    } else {
      // Otherwise, get the auth data from the action (new app installed).
      const { auth } = action
      console.log('auth: ', auth)
      yield put(updatedAuth(auth))
      setAccessToken(auth.access_token)
    }

    const profile = yield call(apiUser.getUserDetail, action.auth.user._id)
    console.log('profile: ', profile)
    if (!profile.error) {
      yield put(saveUserData(profile))
    }
  } catch (e) {
    console.log(e)
  }
}
