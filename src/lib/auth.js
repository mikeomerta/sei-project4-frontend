const tokenName = 'token'

export function setToken(token) {
  window.localStorage.setItem(tokenName, token)
}

export function removeToken() {
  window.localStorage.removeItem(tokenName)
}

export function getToken() {
  return window.localStorage.getItem(tokenName)
}

