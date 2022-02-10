import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkLogin } from '../store/actions/users'

const withAuth = (Component) => {
  return (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(checkLogin())
    }, [dispatch])
    return <Component {...props} />
  }
}

export default withAuth
