/* eslint-disable no-underscore-dangle */
export default class FetchApiClient {
  private _headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  private token = process.env.LOST_API_KEY
  private API_URI = process.env.STOVE_API_URI

  private useTimestamp = false

  private getAuthHeader = () => {
    if (this.token !== '') {
      return {
        Authorization: `Bearer ${this.token}`,
      }
    }
    return { Authorization: '' }
  }

  private headers = () => {
    if (this.token !== '') {
      return {
        ...this._headers,
        Authorization: `Bearer ${this.token}`,
      }
    }
    return this._headers
  }

  constructor({ token, useTs }: { token: string; useTs?: boolean }) {
    this.token = token
    this.useTimestamp = useTs || false
  }

  get<T>(uri: string, queries?: object, additionalHeader = {}) {
    const url = `${this.API_URI}/${uri}`

    return this.api<T>(url, {
      method: 'GET',
      headers: { ...this.headers(), ...additionalHeader },
      params: this.useTimestamp
        ? { ...queries, ts: new Date().getTime() }
        : { ...queries },
    })
  }

  put<T>(uri: string, data: object, params?: object) {
    const url = `${this.API_URI}/${uri}`

    return this.api<T>(url, {
      method: 'PUT',
      headers: this.headers(),
      body: JSON.stringify(data),
      params: { ...params },
    })
  }

  post<T>(uri: string, data: object, params?: object) {
    const url = `${this.API_URI}/${uri}`

    return this.api<T>(url, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(data),
      params: { ...params },
    })
  }

  postFiles<T>(uri: string, data: BodyInit) {
    const url = `${this.API_URI}/${uri}`

    return this.api<T>(url, {
      method: 'POST',
      headers: this.getAuthHeader(),
      body: data,
    })
  }

  putFiles<T>(uri: string, data: BodyInit) {
    const url = `${this.API_URI}/${uri}`

    return this.api<T>(url, {
      method: 'PUT',
      headers: this.getAuthHeader(),
      body: data,
    })
  }

  del<T>(uri: string, params?: object) {
    const url = `${this.API_URI}/${uri}`

    return this.api<T>(url, {
      method: 'DELETE',
      headers: this.headers(),
      params: { ...params },
    })
  }

  getFile(uri: string, queries?: object) {
    const url = `${this.API_URI}/${uri}`

    const timestamp = new Date().getTime()

    const option = {
      method: 'GET',
      headers: { ...this.headers() },
      responseType: 'arraybuffer',
      params: { ...queries, ts: timestamp },
    }

    const { params, ...options } = option
    const queryArr = this.genQueries(params)

    return fetch(`${url}?${queryArr.join('&')}`, options).then((response) => {
      if (!response.ok) {
        return response.json().then((json) => Promise.reject(json))
      }
      return response.blob()
    })
  }

  // eslint-disable-next-line class-methods-use-this
  private genQueries(query?: object) {
    if (query === undefined) {
      return []
    }
    return Object.entries(query).map(([key, value]) => {
      if (Array.isArray(value))
        return value.map((v) => `${key}[]=${encodeURIComponent(v)}`).join('&')
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
  }

  private api<T>(
    url: string,
    option: RequestInit & {
      params?: object
    },
  ) {
    const { params, ...options } = option
    const queryArr = this.genQueries(params)

    return fetch(`${url}?${queryArr.join('&')}`, options).then((response) => {
      if (!response.ok) {
        return response.json().then((json) => Promise.reject(json))
      }
      return response.json() as Promise<T>
    })
  }
}
