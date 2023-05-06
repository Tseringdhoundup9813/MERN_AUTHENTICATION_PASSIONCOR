import React,{useState} from 'react'
import "./Authlayout.css"
import Login from '../../Component/Login'
import Register from '../../Component/Register'
import ForgetPassword from '../../Component/ForgetPassword'

function AuthLayout() {

  const[login,set_login] = useState(true);
  const[register,set_register] = useState(false);
  const[forget,set_forget] = useState(false);

  const handleLogin = ()=>{
    set_login(true);
    set_register(false);
    set_forget(false);
  }

  const handleRegister = ()=>{
    set_login(false);
    set_register(true);
    set_forget(false);
  }
  const handleForget = ()=>{
    set_login(false);
    set_register(false);
    set_forget(true);
  }

  return (
      <div className='authelayout-main-container'>
        {login && <Login></Login>}
        {register&& <Register></Register>}
        {forget&&<ForgetPassword></ForgetPassword>}
        
        <div className='auth_layout_action'>
          <p className="register_action" onClick={login?handleRegister:handleLogin}>{login?"Register?":"Login?"}</p>
          <p className="login_action" onClick={handleForget}>forget?</p>
        </div>
      </div>
  )
}

export default AuthLayout