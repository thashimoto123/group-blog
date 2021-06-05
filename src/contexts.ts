import firebase from 'firebase/app'
import { createContext } from 'react'

type FirebaseContextValue = {
  user: firebase.User | null
  db: firebase.firestore.Firestore | null
  isAuthChecking: boolean
}

export const FirebaseContext = createContext<FirebaseContextValue>({
  user: null,
  db: null,
  isAuthChecking: true
})
