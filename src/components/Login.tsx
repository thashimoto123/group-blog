import React, { VFC, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { FirebaseContext } from '../contexts'
import { login } from 'src/utils/auth'

const Login: VFC = () => {
  const router = useRouter()
  const { user } = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  if (user) {
    router.push('/admin')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
      .then(() => {
        router.push('/admin')
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={email} placeholder='email address' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
