import React from 'react'
import "./styles/signin.css"
const UserSignIn = () => {

  return (
    <div>
    <form action="post">
    <h4 className='text-light'>Login Your Account</h4>
    <input type="email" name="email" placeholder='Email' />
    <input type="password" placeholder='Password'/>
    <button type='submit'>Login</button>
    </form>
    </div>
  )
}

export default UserSignIn