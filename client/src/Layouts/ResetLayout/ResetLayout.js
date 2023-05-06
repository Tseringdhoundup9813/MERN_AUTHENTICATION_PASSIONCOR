import React,{useState}from 'react'
import ResetPassword from '../../Component/ResetPassword';
import Login from '../../Component/Login'

function ResetLayout() {
    // const[login,set_login] = useState();
  return (
    <div className='authelayout-main-container'>
  

        <ResetPassword></ResetPassword>
    <div className='auth_layout_action'>
      {/* <p className="register_action" onClick={login?handleRegister:handleLogin}>{login?"Register?":"Login?"}</p>
      <p className="login_action" onClick={handleForget}>forget?</p> */}
    </div>
  </div>
  )
}

export default ResetLayout