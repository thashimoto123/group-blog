import { VFC, ReactNode } from 'react'
import useRequireLogin from 'src/hooks/useRequireLogin'

type Props = {
  children: ReactNode
}

const AdminRoot: VFC<Props> = ({ children }) => {
  const { isAuthChecking, user } = useRequireLogin()
  if (isAuthChecking || !user) return (<div>ログイン情報を確認中</div>)

  return (<>{children}</>)
}

export default AdminRoot
