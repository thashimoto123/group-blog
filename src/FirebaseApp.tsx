import { VFC, ReactNode } from 'react'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import { FirebaseContext } from './contexts'

const FirebaseApp: VFC<{
  children: ReactNode
}> = ({ children }) => {
  const db = firebase.firestore()
  const user = firebase.auth().currentUser
  console.log(user)
  return (
    <FirebaseContext.Provider value={{ db, user }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseApp
