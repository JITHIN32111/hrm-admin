import React from 'react'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate('/details')}>
      Login
    </div>
  )
}

export default AdminLogin
