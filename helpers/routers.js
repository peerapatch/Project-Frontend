import Router from 'next/router'
export const redirect = (path, ctx = {}) => {
  const { res } = ctx
  if (res) {
    res.writeHead(302, { Location: path })
    res.end()
  } else {
    Router.push(path)
  }
}

export const redirectIf401 = (response = {}, path = '/login', ctx) => {
  if (response.status === 401) {
    redirect(path, ctx)
  }
}

export const redirect404 = ({ res }) => {
  if (res) {
    res.statusCode = 404
    res.end('Not found')
  }
}

export const redirectExternal = (url, isNewTab = false) => {
  if (isNewTab) {
    window.open(url, '_blank')
  } else {
    window.location.href = url
  }
}
