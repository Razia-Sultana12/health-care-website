import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();
const googleProvider=new GoogleAuthProvider();

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [isLogin,setIsLogin]=useState(false);
    const auth = getAuth();
    

const handleGoogleSignIn=()=>{
signInWithPopup(auth, googleProvider)
  .then((result) => {
      const user= result.user;
      console.log(user);
    })
}
const toggleLogin=e=>{
  setIsLogin(e.target.checked);
}
const handleEmailChange=e=>{
    setEmail(e.target.value);
}
const handlePasswordChange=e=>{
    setPassword(e.target.value);
}
    
    
    
    return (
        <div>
            {/* <Register></Register> */}
            <h1 className="text-primary p-3">Please Login</h1>
            <form className="w-75 mx-auto">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Already Registered?</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  <button onClick={handleGoogleSignIn}>Google Sign In</button>
  <Link to="/register"><button >New User?</button></Link>
  
</form>
        </div>
    );
};

export default Login;