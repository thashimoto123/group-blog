import firebase from 'firebase/app'
import { createContext } from 'react'

type FirebaseContextValue = {
  user: firebase.User | null
  db: firebase.firestore.Firestore | null
}

export const FirebaseContext = createContext<FirebaseContextValue>({
  user: null,
  db: null
})
