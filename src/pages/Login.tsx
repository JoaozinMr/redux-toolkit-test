import { useState } from 'react'
import { login, logout } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
  const [newUsername, setNewUsername] = useState("")

  const dispatch = useDispatch() // Dispatch é para modificar valores
  const username = useSelector((state: any) => state.user.value.username)
  // nesse hook o state tá representando todos os reducers que estão la na store
  return (
    <>
      <h1>{username}</h1>
      <input type="text" required onChange={(e) => {
        setNewUsername(e.target.value)
      }} />
      <button onClick={() => dispatch(login({ username: newUsername }))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  )
}