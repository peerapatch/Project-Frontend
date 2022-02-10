import React from 'react'
import Document, { Html, Main, NextScript } from 'next/document'
import HeadComponent from '../components/common/head'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <HeadComponent />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
MyDocument.getInitialProps = async ctx => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument
