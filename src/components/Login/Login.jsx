import React, { useState,useEffect} from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user_icon.png'
import email_icon from '../Assets/email_icon.png'
import password_icon from '../Assets/password_icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

const [data, setData] = useState([]);
const [result, setResult] = useState([]);
const [action,setAction] = useState("Sign Up");
const ClickHandler=() => {
    axios.post('http://localhost:9090/dev/v1/auth/login',data).then((res)=>{alert ('Giriş Yapıldı')});
}



        useEffect(()=> {
    axios.get('http://localhost:9090/dev/v1/auth/login')
   
    .then((res)=>{
        console.log(res.data);
        setResult(res.data);
    })
   
    .catch((err)=>{
        console.log(err);
      })
        },[]);


  return (

    <div className='container'>
        
        <div className="inputs">
            
            <div className="input">
                <img src={email_icon}alt=""/>
                <input type="email"placeholder="Email" onChange={(e)=>setData({...data,email: e.target.value})} />
                
            </div>
            
            <div className="input">
                <img src={password_icon}alt=""/>
                <input type="password"placeholder="Password" onChange={(e)=>setData({...data,password: e.target.value})}/>
            </div>
           
        </div>
        <div className='submit-container2'>
        {action==="Login"?<div></div>: <div className="forgot-password">Forgot Password? 
        <Link to="/reset"> Click Here! </Link></div>}
        </div>
       
        <div className="submit-container">

            <div className={action==="Login"?"submit gray":"submit"}>
            <Link to="/signup"> Sign Up </Link></div>

            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{ClickHandler()}}>
                Login
            </div>
            
        </div>
    </div>
  )
}

export default Login