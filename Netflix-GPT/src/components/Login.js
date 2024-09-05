import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    //instead of creating state variables,here we are using ""useRef"" which gives ref to email and password used in validate.js
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () =>{
        //validate the form data
        const msg = checkValidData(email.current.value, password.current.value)
        setErrorMessage(msg)

        if(msg) return

        if(!isSignInForm){
            //signup logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage)
            });
        }
        else{
            //signin logic

        }


    }

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
        <Header/>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
                    alt='logo'>
                </img>
            </div>
            <form 
                onSubmit={(e)=> e.preventDefault()}
                className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 cursor-pointer'
            >
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                
                {!isSignInForm && (
                    <input ref={name} type='text' placeholder='Full Name' className='p-3 my-3 w-full rounded-lg bg-gray-700'></input>
                )}
                <input ref={email} type='text' placeholder='Email or Phone Number' className='p-3 my-3 w-full rounded-lg bg-gray-700'></input>
                <input ref={password} type='password' placeholder='Password' className='p-3 my-3 w-full rounded-lg bg-gray-700'></input>
                
                <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
                
                <button className='p-3 my-4 bg-red-700 rounded-lg w-full' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='' onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? SignUp Now" : "Already Registered? SignIn Now"}
                </p>
            </form>
        </div>
    )
}

export default Login
