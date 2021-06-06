import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { FirebaseContext } from 'src/contexts'

const useRequireLogin = () => {
  const router = useRouter()
  const { user } = useContext(FirebaseContext)
  useEffect(() => {
    if (!user) router.push('/admin/login')
  }, [router, user])
}

export default useRequireLogin
