import React,{useState} from 'react'
import Input from "./Input"
// visible icons 
import {MdVisibility} from "react-icons/md"

// invisbile icons 
import {AiFillEyeInvisible} from "react-icons/ai";

function Register() {
  const[visible,set_visible] = useState(false);
  const[visible1,set_visible1] = useState(false);


  return (
    <form className='login'>


    <div className="login-input-container">


      <Input type="text" placeholder="name"></Input>

      <Input type="email" placeholder="email"></Input>
      <Input type={visible?"text":"password"} placeholder="password" icon={visible?<MdVisibility/>:<AiFillEyeInvisible/>} handleClick={()=>set_visible(!visible)}></Input>
      <Input type={visible1?"text":"password"} placeholder="confirm" icon={visible1?<MdVisibility/>:<AiFillEyeInvisible/>} handleClick={()=>set_visible1(!visible1)}></Input>

    </div>

    <div className="login-btn">
      <button>Register</button>
 
    </div>

  </form>
  )
}

export default Register