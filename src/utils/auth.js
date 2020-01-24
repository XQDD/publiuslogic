import netlifyIdentity from '../../src/components/IdentityWidget'

const logAuth = process.env.NODE_ENV === 'development' && false // set to true to turn on logging
const clog = (...args) => logAuth && console.log(...args)
// helpful for debugging netlify identity

export const isBrowser = () => typeof window !== 'undefined'
export const getCurrentUser = () => isBrowser && getUser()
export const initAuth = () => {
  if (isBrowser()) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init()
  }
}
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('faunaNetlifyUser')
    ? JSON.parse(window.localStorage.getItem('faunaNetlifyUser'))
    : {}

const setUser = user =>
  window.localStorage.setItem('faunaNetlifyUser', JSON.stringify(user))

export const handleLogin = callback => {
  clog('isLoggedIn check', isLoggedIn())
  if (isLoggedIn()) {
    clog('logged in')
    callback(getUser())
  } else {
    clog('logging in...')
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      clog('logged in!', { user })
      setUser(user)
      callback(user)
    })
  }
}

export const isLoggedIn = () => {
  if (!isBrowser()) return false
  // const user = getUser()
  const user = netlifyIdentity.currentUser()
  clog('isLoggedIn check', { user })
  return !!user
}

export const logout = callback => {
  netlifyIdentity.logout()
  netlifyIdentity.on('logout', () => {
    setUser({})
    callback()
  })
}
