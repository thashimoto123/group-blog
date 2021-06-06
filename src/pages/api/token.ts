import { NextApiRequest, NextApiResponse } from 'next'
import * as firebaseAdmin from 'firebase-admin'
import firebaseAdminConfig from 'src/firebase-admin-config'

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseAdminConfig as firebaseAdmin.ServiceAccount)
})

export default (req: NextApiRequest, res: NextApiResponse) => {
  req.cookies.token
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
