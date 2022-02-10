import TYPES from './../types/pages'

export const loadingPage = (loading) => async (dispatch, getState) => {
  if (loading) {
    dispatch({ type: TYPES.GETTING_LOADING_START })
  } else {
    dispatch({ type: TYPES.GETTING_LOADING_SUCCESS })
  }
}

export const setPage = (page) => (dispatch, getState) => {
  dispatch({ type: TYPES.SET_PAGE, data: page })
}

export const clearPageData = () => (dispatch, getState) => {
  dispatch({ type: TYPES.CLEAR_DATA })
}
