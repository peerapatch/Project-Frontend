import React from 'react'
import { Head } from 'next/document'

const HeadComponent = () => (
  <Head>
    {/* <title>Officel</title>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    <link href='/static/dist/css/style.css' rel='stylesheet' type='text/css' /> */}
    <meta charSet='UTF-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>CheckStaff</title>
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
    <link rel='stylesheet' href='/static/dist/css/style.css' />

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' />

    <script src='https://unpkg.com/react/umd/react.production.min.js' crossorigin />
    <script
      src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
      crossorigin
    />

    <script
      src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
      crossorigin
    />
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=VT323' />
  </Head>
)
export default HeadComponent
