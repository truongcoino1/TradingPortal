import qs from 'querystringify'
import _ from 'lodash'

let DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
  Authorization: null
}

const MULTIPART_FORM_HEADER = {
  'Content-Type': 'multipart/form-data',
  'Mime-Type': 'jpg|jpeg|png'
}

const url = 'http://192.168.1.102'

const baseUrl = url+':8001/api/'
export const avatarUrl = url+':8001/images/'
export const infoUrl = url+':8001/text/'
export const videoUrl = url+':8001/videos/'
// export const profileoUrl = url+':8000/text/'
export const socketUrl2 = url+':3000'
export const socketUrl1 = url+':8001'

export function setAccessToken (token: string): void {
  DEFAULT_HEADERS = {
    ...DEFAULT_HEADERS,
    Authorization: `Token ${token}`
  }
}

export const api = {
  get: (endpoint: string, params: Object) => {
    const options = {
      method: 'GET',
      headers: {
        ...DEFAULT_HEADERS
      }
    }
    return fetch(baseUrl + endpoint + qs.stringify(params, true), options).then(
      result => {
        return result.json()
      }
    )
  },

  post: (endpoint: string, params: Object) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => {
      return result.json()
    })
  },

  postImage: (endpoint: string, params: Object) => {
    let formData = new FormData()
    _.forIn(params, (value, key) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value)
      }
    })
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'multipart/form-data',
        'Content-Type': 'multipart/form-data'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => result.json())
  },

  postRaw: (endpoint: string, params: Object) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS,
        'Content-Type': 'application/json'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => {
      return result.json()
    })
  },

  put: (endpoint: string, params: Object) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS,
        'Content-Type': 'application/json'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => {
      return result.json()
    })
  },

  postFormData: (endpoint: string, params): Promise => {
    const options = {
      method: 'POST',
      body: params,
      headers: {
        ...MULTIPART_FORM_HEADER,
        Accept: 'multipart/form-data'
      }
    }

    return fetch(baseUrl + endpoint, options).then(result => {
      return result.json()
    })
  },

  postUrlFormEncoded: (
    endpoint: string,
    params: Object,
    extraConfig: Object
  ): Promise => {
    const options = {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        ...extraConfig.headers
      },
      body: qs.stringify(params)
    }
    return fetch(baseUrl + endpoint, options).then(result => {
      return result.json()
    })
  }
}
