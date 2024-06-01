import React, { useState } from 'react'
import './resetPassword.css'
import user_icon from '../Assets/user_icon.png'
import email_icon from '../Assets/email_icon.png'
import password_icon from '../Assets/password_icon.png'

const ResetPasswordPage = () => {

const [action,setAction] = useState("Save");


  return (
    <div className='container'>
        
        <div className="inputs">
        <div className="input">
                <img src={email_icon}alt=""/>
                <input type="email"placeholder="Email"/>
            </div>

            <div className="input">
                <img src={password_icon}alt=""/>
                <input type="password"placeholder="New Password"/>
            </div>
            
            
            <div className="input">
                <img src={password_icon}alt=""/>
                <input type="password"placeholder="New Password Again"/>
            </div>
        </div>
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Save")}}>Save</div>
            
        </div>
    </div>
  )
}

export default ResetPasswordPage;