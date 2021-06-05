import Head from 'next/head'
import Login from 'src/components/Login'

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <Login />
      </main>
    </div>
  )
}
