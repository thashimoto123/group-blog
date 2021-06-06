import { VFC, useContext, useState } from 'react'
import { FirebaseContext } from '../contexts'
import firebase from 'firebase'

const Login: VFC = () => {
  const { user } = useContext(FirebaseContext)
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
