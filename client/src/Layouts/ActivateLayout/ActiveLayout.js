import React from 'react'
import { useNavigate} from "react-router-dom";
import "../ActivateLayout/activelayout.css"
function ActiveLayout({}) {
    let history = useNavigate();
 const handleClick = ()=>{
    history("/");
 }
  return (
    <div className="active">
        <p>ready to login ? <span onClick={handleClick}>here</span></p>
    </div>
  )
}

export default ActiveLayout