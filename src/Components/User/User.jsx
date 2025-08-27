import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-red-500 px-4 py-8 text-2xl text-center font-semibold'>User : {userid}</div>
  )
}

export default User