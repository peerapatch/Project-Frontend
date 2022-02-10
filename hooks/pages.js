
import { useDispatch, useSelector } from 'react-redux'
import { loadingPage, setPage } from '../store/actions/pages'

export const usePages = () => {
  const dispatch = useDispatch()
  const isPagesLoading = useSelector(state => state.pages.isPagesLoading)
  const page = useSelector(state => state.pages.page)
  const handleSetPage = (page) => {
    console.log('hook page', page)
    dispatch(setPage(page))
  }
  const handlePageLoading = (loading) => {
    dispatch(loadingPage(loading))
  }
  return {
    handleSetPage,
    handlePageLoading,
    isPagesLoading,
    page
  }
}
