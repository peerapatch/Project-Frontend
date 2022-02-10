import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { wrapper } from '../store'
import Loading from '../components/common/Loading'
import Body from '../components/common/Body'
import NProgress from 'nprogress'

const MyApp = (props) => {
  const routers = useRouter()
  const [loading, setLoading] = useState(false)
  const { Component, pageProps, router } = props

  const pathname = pageProps.pathname.split('/')[1]
  const subPathname = pageProps.pathname.split('/')[2]

  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start()
      setLoading(true)
    }
    const handleRouteComplete = () => {
      NProgress.done()
      setLoading(false)
    }
    routers.events.on('routeChangeStart', handleRouteChange)
    routers.events.on('routeChangeComplete', handleRouteComplete)
    routers.events.on('routeChangeError', handleRouteComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteComplete)
      routers.events.off('routeChangeError', handleRouteComplete)
    }
  }, [routers.events])

  return (
    <Body pathname={pathname} subPathname={subPathname} loading={loading}>
      {!loading && <Component {...pageProps} key={router.route} />}
      {loading && <Loading />}
    </Body>
  )
}

// Initial Server Side
MyApp.getInitialProps = async ({ Component, ctx }) => {
  await ctx.store.dispatch({ type: 'TOE', payload: 'was set in _app' })
  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      pathname: ctx.pathname
    }
  }
}
export default wrapper.withRedux(MyApp)
