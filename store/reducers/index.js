import { combineReducers } from 'redux'
import pages from './pages'
import dashboard from './dashboard'
import { HYDRATE } from 'next-redux-wrapper'

const combinedCommonReducers = combineReducers({
  pages,
  dashboard

})

// create your reducer
const reducer = (state = { tick: 'init' }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case 'TICK':
      return { ...state, tick: action.payload }
    case 'LOGOUT':
      return combinedCommonReducers(undefined, action)
    default:
      return combinedCommonReducers(state, action)
  }
}

export default reducer
