import { useState, useEffect, VFC, ReactNode } from 'react'
import nookies from 'nookies'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import { FirebaseContext } from './contexts'

const FirebaseApp: VFC<{
  children: ReactNode
}> = ({ children }) => {
  const db = firebase.firestore()
  const cookieKey = "token"
  const [user, setUser] = useState<firebase.User | null>(null)
  const [isAuthChecking, setIsAuthChecking] = useState(true)
  // useEffect(() => {
    // const cookies = nookies.get();
    // const token = await firebase.auth().verifyIdToken(cookies[cookieKey])

    // the user is authenticated!
    // const { uid, email } = token;
  // })

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      console.log('onIdTokenChanged')
      if (!user) {
        setUser(null)
        nookies.destroy(null, cookieKey)
        return
      }

      const token = await user.getIdToken()
      setUser(user)
      nookies.destroy(null, cookieKey)
      nookies.set(undefined, cookieKey, token, {
        maxAge: 30 * 24 * 60 * 60,
      })
    })
  }, [])

  useEffect(() => {
    const interval = 10 * 60 * 1000
    const handler = setInterval(async () => {
      console.log('checking')
      const user = firebase.auth().currentUser
      if (user) {
        await user.getIdToken(true)
      }
      setIsAuthChecking(true)
    }, interval)
    return () => clearInterval(handler)
  }, [])

  return (
    <FirebaseContext.Provider value={{ db, user, isAuthChecking }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseApp
