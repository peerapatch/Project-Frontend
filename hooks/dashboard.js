import { useDispatch, useSelector } from 'react-redux'
import { createSubject } from '../store/actions/dashboard'

export const dashboardData = () => {
  const dataRoi = useSelector((state) => state.dashboard.dataRoi)
  const subjects = useSelector((state) => state.dashboard.subjects)
  const isLoading = useSelector((state) => state.dashboard.isLoading)
  const getsError = useSelector((state) => state.dashboard.getsError)
  const loaderPB = useSelector((state) => state.dashboard.loaderPB)
  const dispatch = useDispatch()
  const submitSubject = (data) => {
    dispatch(createSubject(data))
  }
  return {
    getsError,
    isLoading,
    dataRoi,
    loaderPB,
    submitSubject,
    subjects
  }
}
