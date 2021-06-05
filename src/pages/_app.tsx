import { AppProps } from 'next/app'
import firebase from 'firebase/app'
import firebaseConfig from 'src/firebase-config'
import FirebaseApp from 'src/FirebaseApp'
import AuthRoot from 'src/components/AdminRoot'
import 'src/styles/globals.css'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith('/admin') && !router.pathname.startsWith('/admin/login')) {
    return (
      <FirebaseApp>
        <AuthRoot>
          <Component {...pageProps} />
        </AuthRoot>
      </FirebaseApp>
    )
  } else {
    return (
      <FirebaseApp>
        <Component {...pageProps} />
      </FirebaseApp>
    )
  }
}

export default MyApp
