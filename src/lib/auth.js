const tokenName = 'token'
const userId = 'userId'

export function setToken(token) {
  window.localStorage.setItem(tokenName, token)
}

export function removeToken() {
  window.localStorage.removeItem(tokenName)
}

export function getToken() {
  return window.localStorage.getItem(tokenName)
}
export function setUserId(id) {
  return window.localStorage.setItem(userId, id)
}

export function getUserId() {
  return window.localStorage.getItem(userId)
}

