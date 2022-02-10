import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { createWrapper } from 'next-redux-wrapper'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// create a makeStore function
export const makeStore = (initialState = {}) => {
  return createStore(reducer, initialState, bindMiddleware([thunkMiddleware]))
}

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production'
})
