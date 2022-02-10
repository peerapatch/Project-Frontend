import { parseCookies, setCookie, destroyCookie } from 'nookies'

import CONFIG from '../config/config'

const options = {
  maxAge: CONFIG.COOKIE_MAX_AGE,
  expires: new Date(Date.now() + CONFIG.COOKIE_MAX_AGE * 1000),
  secure: false, // TODO change back after production use https
  path: '/',
  sameSite: 'lax'
}

export const setAppCookie = (key, value, ctx = {}) => {
  return setCookie(ctx, key, value, options)
}

export function removeAppCookie (key, ctx = {}) {
  return destroyCookie(ctx, key)
}

export function getAppCookie (key, ctx = {}) {
  const cookies = parseCookies(ctx)
  return cookies[key]
}
