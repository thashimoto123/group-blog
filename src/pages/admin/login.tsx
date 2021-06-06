import { VFC } from 'react'
import Head from 'next/head'
import LoginForm from 'src/components/LoginForm'

const Login: VFC = () => {
  return (
    <div>
      <Head>
        <title>ログインページ</title>
      </Head>
      <main>
        <h1>ログインページ</h1>
        <LoginForm />
      </main>
    </div>
  )
}

export default Login
