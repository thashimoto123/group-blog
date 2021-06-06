import { VFC, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { FirebaseContext } from '../contexts'
import firebase from 'firebase'

const Login: VFC = () => {
  const router = useRouter()
  const { user } = useContext(FirebaseContext)
  console.log(user)
  if (user) {
    alert('logined')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        // router.push('/admin')
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return <div>
      <input type="text" value={email} placeholder='email address' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <span onClick={() => handleClick()}>Login</span>
  </div>
}

export default Login
