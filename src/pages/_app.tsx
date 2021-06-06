import { AppProps } from 'next/app'
import firebase from 'firebase/app'

import firebaseConfig from '../firebase-config'
import FirebaseApp from '../FirebaseApp'

import '../styles/globals.css'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseApp>
      <Component {...pageProps} />
    </FirebaseApp>
  )
}

export default MyApp
