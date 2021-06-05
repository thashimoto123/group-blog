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


  useEffect(() => {
    const _user = firebase.auth().currentUser
    console.log(_user)
    setIsAuthChecking(true)
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.destroy(null, cookieKey)
        setIsAuthChecking(false)
        return
      }

      const token = await user.getIdToken()
      const data =  await fetch('/api/token').then((res) => {
        res.json()
      })
      console.log(data)
      setUser(user)
      nookies.destroy(null, cookieKey)
      nookies.set(undefined, cookieKey, token, {
        maxAge: 30 * 24 * 60 * 60,
      })
      setIsAuthChecking(false)
    })
  }, [])

  // useEffect(() => {
  //   const interval = 10 * 60 * 1000
  //   const handler = setInterval(async () => {
  //     console.log('checking')
  //     const user = firebase.auth().currentUser
  //     if (user) {
  //       await user.getIdToken(true)
  //     }
  //     setIsAuthChecking(true)
  //   }, interval)
  //   return () => clearInterval(handler)
  // }, [])

  return (
    <FirebaseContext.Provider value={{ db, user, isAuthChecking }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseApp
