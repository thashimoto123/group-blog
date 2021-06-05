import { VFC } from 'react'
import { logout } from 'src/utils/auth'

const Admin: VFC = () => {
  return (
    <div>
      <h1>管理者ページ</h1>
      <button onClick={() => logout()}>ログアウト</button>
    </div>
  )
}

export default Admin
