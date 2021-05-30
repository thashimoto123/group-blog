import { useContext, useState, useRef, useEffect } from 'react'
import { FirebaseContext } from '../contexts'
import firebase from 'firebase'

// TODO: あとで別ファイルにまとめる
type Article = {
  id: string
  title: string
  content: string
  markdown: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const firebaseRef = useRef(useContext(FirebaseContext))

  useEffect(() => {
    const { db } = firebaseRef.current
    if (!db) throw new Error('Firebase is not initialized')
    const query = db
      .collection('articles')

    const load = async () => {
      setLoading(true)
      try {
        const snap = await query.get()
        const articlesData = snap.docs.map(doc => ({
          ...(doc.data() as Article),
          id: doc.id
        }))
        setArticles(articlesData)
        setError(null)
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
    load()
  }, [])

  return { articles, loading, error }
}

export default useArticles
