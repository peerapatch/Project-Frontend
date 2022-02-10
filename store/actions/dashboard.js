import TYPES from '../types/dashboard'
// import CONFIG from '../../config/config'
import { getSubjectApi, postSubject } from '../../helpers/networks'
// import { convertUserData } from '../../adapter/user'
// import _ from 'lodash'

// export const getRoiData = (acc) => async (dispatch, getState) => {
//   dispatch({ type: TYPES.CLEAR_DATA })

//   dispatch({ type: TYPES.START_GET_ROI_DATA })

//   const url = CONFIG.URL_GET_ROI
//   const data = {
//     acc: acc,
//     percent: '60'
//   }
//   try {
//     const response = await postApiData(url, data)
//     if (response.data.success) {
//       await dispatch({ type: TYPES.SUCCESS_GET_ROI_DATA, data: response.data })
//     } else {
//       dispatch({ type: TYPES.FAIL_GET_ROI_DATA })
//     }
//   } catch (err) {
//     dispatch({ type: TYPES.FAIL_GET_ROI_DATA })
//     console.log(err.respons)
//   }
// }

export const getSubject = (acc) => async (dispatch, getState) => {
  dispatch({ type: TYPES.CLEAR_DATA })

  dispatch({ type: TYPES.START_GET_SUBJECT })

  const url = 'http://localhost:9000/api/subject'
  try {
    const response = await getSubjectApi(url)
    if (response.data) {
      await dispatch({ type: TYPES.SUCCESS_GET_SUBJECT, data: response.data })
    } else {
      dispatch({ type: TYPES.FAIL_GET_ROI_DATA })
    }
  } catch (err) {
    dispatch({ type: TYPES.FAIL_GET_ROI_DATA })
    console.log(err.respons)
  }
}

export const createSubject = (data) => async (dispatch, getState) => {
  try {
    const url = 'http://localhost:9000/api/subject'
    await postSubject(url, data)
    const responseGet = await getSubjectApi(url)
    if (responseGet.data) {
      await dispatch({ type: TYPES.SUCCESS_GET_SUBJECT, data: responseGet.data })
    } else {
      dispatch({ type: TYPES.FAIL_GET_ROI_DATA })
    }
  } catch (e) {
    console.log('error: ', e)
    dispatch({ type: TYPES.FAIL_GET_ROI_DATA })
  }
}

export const clearData = (ctx) => (dispatch) => {
  dispatch({ type: TYPES.CLEAR_DATA })
}
