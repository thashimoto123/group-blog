import { useState, useEffect, VFC, ReactNode } from 'react'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import { FirebaseContext } from './contexts'

const FirebaseApp: VFC<{
  children: ReactNode
}> = ({ children }) => {
  const db = firebase.firestore()
  const [user, setUser] = useState<firebase.User | null>(null)
  const [isAuthChecking, setIsAuthChecking] = useState(true)


  useEffect(() => {
    setIsAuthChecking(true)
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null)
        setIsAuthChecking(false)
        return
      }

      setUser(user)
      setIsAuthChecking(false)
    })
  }, [])


  return (
    <FirebaseContext.Provider value={{ db, user, isAuthChecking }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseApp
