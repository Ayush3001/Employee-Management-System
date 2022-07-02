import React, { useState } from 'react'
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';
import * as AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setError] = useState("")

    
    const history = useHistory()

    // handle Submit handler function
    const handleSubmit = (event) =>{
        event.preventDefault();

        const userCredential = {
            email,
            password
        }
         const loginAction = (userCredential) => {
            return AuthService.login(userCredential)
                .then(data=> {
                    
                    return Promise.resolve(data)
        
                })
                .catch(error => {
        
                    return Promise.reject(error)
                })
        }
        const login = loginAction(userCredential)
        login
            .then((data) =>{ 
                console.log(data);
                history.push('/home');
        
        })
            .catch(error => setError(error.err))
        
    }
   

    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin />
                    <LoginForm loginState={{handleSubmit, setEmail, setPassword, errorMessage, setError}} />
                    
                </div>
            </div>
      </div>
    )
}
