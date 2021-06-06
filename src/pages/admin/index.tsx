import { VFC } from 'react'
import Head from 'next/head'
import { logout } from 'src/utils/auth'

const Admin: VFC = () => {
  return (
    <div>
      <Head>
        <title>管理者ページ</title>
      </Head>
      <h1>管理者ページ</h1>
      <button onClick={() => logout()}>ログアウト</button>
    </div>
  )
}

export default Admin
