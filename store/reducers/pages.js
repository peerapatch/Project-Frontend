import TYPES from '../types/pages'

const initialState = {
  isPagesLoading: false,
  page: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GETTING_LOADING_START:
      return {
        ...state,
        isPagesLoading: true
      }
    case TYPES.GETTING_LOADING_SUCCESS:
      return {
        ...state,
        isPagesLoading: false
      }
    case TYPES.GETTING_LOADING_FAIL:
      return {
        ...state,
        isPagesLoading: false
      }
    case TYPES.SET_PAGE:
      return {
        ...state,
        page: action.data
      }
    case TYPES.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}

export default reducer
