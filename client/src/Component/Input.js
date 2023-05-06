import React from 'react'
import "../css/Input.css";

function Input({icon,handleClick,placeholder,type,handleChange,defaultValue,disable}) {
  return (
    <div className='input'>
        <label>
            <div className="input_icon" onClick={handleClick}>{icon}</div>
            <input  placeholder={placeholder} type={type} onChange={handleChange} defaultValue={defaultValue} disable={disable} autoComplete='off'/>
  
        </label>

    </div>
  )
}

export default Input