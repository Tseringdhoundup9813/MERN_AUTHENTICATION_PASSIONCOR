import React from 'react'
import Input from './Input'
function ForgetPassword() {
  return (
    <form className='login'>


      <div className="login-input-container">
        <Input type="email" placeholder="email"></Input>

      </div>

      <div className="login-btn">
        <button>Send</button>
 
      </div>

    </form>
  )
}

export default ForgetPassword