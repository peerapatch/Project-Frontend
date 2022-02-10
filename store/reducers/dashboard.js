import TYPES from '../types/dashboard'

const initialState = {
  dataRoi: null,
  isLoading: false,
  getsError: null,
  loaderPB: false,
  subjects: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_GET_ROI_DATA:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.START_GET_SUBJECT:
      return {
        ...state
      }
    case TYPES.SUCCESS_GET_ROI_DATA:
      return {
        ...state,
        subjects: action.data,
        isLoading: false,
        loaderPB: true
      }
    case TYPES.SUCCESS_GET_SUBJECT:
      return {
        ...state,
        subjects: action.data,
        isLoading: false,
        loaderPB: true
      }
    case TYPES.FAIL_GET_ROI_DATA:
      return {
        ...state,
        isLoading: false,
        getsError: 'Please Check Account and Try again'
      }
    case TYPES.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}

export default reducer
