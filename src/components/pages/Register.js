import React, { useState } from 'react'
import BaseLogin from '../imports/BaseLogin';
import RegisterForm from '../imports/RegisterForm';
import * as AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("");
    
    const [errorMessage, setError] = useState("")

   
    const history = useHistory()

    // on form submit click handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            username,
            email,
            password,
            passwordCheck
        }
        const registerAction=(newUser)=>{
            return AuthService.register(newUser)
        .then(response => {
            return Promise.resolve(response.data)

        })
        .catch(error => {
            return Promise.reject(error)

        })
        }
       const register=registerAction(newUser)
       register
       .then((data) =>{ 
           console.log(data);
           history.push('/login');
   
   })
       .catch(error => setError(error.err))
   
}
    
    let registerData = {
        handleSubmit,
        setUsername,
        setEmail, 
        setPassword,
        setPasswordCheck,
        errorMessage,
        setError
    
    }
    
    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin />
                    <RegisterForm registerState={registerData}  />
                   
                </div>
            </div>
      </div>
    )
}
