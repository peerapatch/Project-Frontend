import Dashboard from '../screens/Dashboard'
import { getSubject } from '../store/actions/dashboard'
Dashboard.getInitialProps = async (ctx) => {
  const { store } = ctx
  await store.dispatch(getSubject(ctx))
  return { props: {} }
}
export default Dashboard
