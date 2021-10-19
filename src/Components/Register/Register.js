import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import initializeAuthentication from "../../Firebase/firebase.init";


initializeAuthentication();
const Register = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [isLogin,setIsLogin]=useState(false);
     const auth = getAuth();

     const toggleLogin=e=>{
       setIsLogin(e.target.checked);
     }
     const handleEmailChange=e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    const handleRegistration=e=>{
      e.preventDefault();
        console.log(email,password);
        if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
          setError("Password must be contain at least a string,a number,a special character & longer than 6 characters ")
        }
        createUserWithEmailAndPassword(auth, email, password)
       .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  }
    return (
        <div>
            <h1 className="text-primary p-3">PLease Register</h1>
            <form onSubmit={handleRegistration} class="row g-3">
     <div class="col-md-6">
    <label for="validationDefaultEmail" class="form-label">Email</label>
    <div class="input-group">
      <input
       onChange={handleEmailChange} type="email" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault04" class="form-label">password</label>
    <input onBlur={handlePasswordChange} type="password" class="form-control" id="validationDefault03" required/><p className="text-danger">{error}</p>
  </div>
  <div class="col-md-6">
    <label for="validationDefault05" class="form-label">Re-enter your password</label>
    <input onBlur={handlePasswordChange} type="password" class="form-control" id="validationDefault03" required/>
  </div>
  
  
  <div class="col-12">
    <div class="form-check">
      <input onChange={toggleLogin} class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
        </div>
    );
};

export default Register;