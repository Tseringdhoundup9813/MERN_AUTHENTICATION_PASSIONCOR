import React,{useState}  from 'react'
import "../css/login.css"
// import input 
import Input from "./Input"
// visible icons 
import {MdVisibility} from "react-icons/md"

// invisbile icons 
import {AiFillEyeInvisible} from "react-icons/ai";

function Login() {


  const[visible,set_visible] = useState(false);

  // passwod show toggle 
  
  return (
    <form className='login'>


      <div className="login-input-container">
        <Input type="email" placeholder="email"></Input>
        <Input type={visible?"text":"password"} placeholder="password" icon={visible?<MdVisibility/>:<AiFillEyeInvisible/>} handleClick={()=>set_visible(!visible)}></Input>

      </div>

      <div className="login-btn">
        <button>login</button>
        <button>sign in google</button>
      </div>

    </form>
  )
}

export default Login