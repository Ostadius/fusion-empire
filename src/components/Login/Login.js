import React from 'react';
import classes from './Login.module.css';
import loginlogo from '../../assets/loginpic.png'
const login =(props)=>{
  return (
    <div className={classes.Login}>
        <img alt="Login-pic" src={loginlogo} className={classes.LogPic} />
        <a>Login Dawg</a>
        <input onChange={props.changed}></input>
        <input onChange={props.changed}></input>
        <button onClick={props.loginBtn} className={classes.btnStyle}>Login Playa</button>
    </div>


  )
}

export default login;
