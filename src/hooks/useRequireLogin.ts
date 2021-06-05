import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { FirebaseContext } from 'src/contexts'

const useRequireLogin = () => {
  const router = useRouter()
  const { user, isAuthChecking } = useContext(FirebaseContext)
  useEffect(() => {
    if (isAuthChecking) return
    if (!user) router.push('/admin/login')
  }, [router, user, isAuthChecking])

  return {
    user,
    isAuthChecking,
  }
}

export default useRequireLogin
