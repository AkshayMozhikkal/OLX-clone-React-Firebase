import React from 'react';
import firebase from 'firebase';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../store/FirebaseContext';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, String(password)).then((result)=>{
        navigate('/')
    }).catch(err=>{
      alert(err)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>{handleLogin(e)}}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <a onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
