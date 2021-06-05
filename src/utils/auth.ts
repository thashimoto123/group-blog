import firebase from 'firebase'

export async function login(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => userCredential.user)
}
export async function logout() {
  firebase.auth().signOut()
}
