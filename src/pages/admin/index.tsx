import { VFC } from 'react'
import useRequireLogin from 'src/hooks/useRequireLogin'

const Admin: VFC = () => {
  useRequireLogin()
  return <div>admin page</div>
}

export default Admin
