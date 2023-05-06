import { useSelector } from 'react-redux'

export const Contact = () => {
  const username = useSelector((state: any) => state.user.value.username)

  return (
    <>
      <h1>This is Contact</h1>
      <h1>{username}</h1>
    </>
  )
}