import { AppProps } from 'next/app'
import firebase from 'firebase/app'

import firebaseConfig from '../firebase-config'
import FirebaseApp from '../FirebaseApp'

import '../styles/globals.css'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseApp>
      <Component {...pageProps} />
    </FirebaseApp>
  )
}

export default MyApp
