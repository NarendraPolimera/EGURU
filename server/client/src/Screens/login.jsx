import React, { useState } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import {  Redirect, Link } from 'react-router-dom';
import Navig from './Navigator';
import Footer from './Footer';
import './App.css';

const Login = ({history}) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;

    //handle change from inputs
    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

    //Submit data to backend
    const handleSubmit = e => {
        e.preventDefault();
        if (email && password) {
            axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password })
                .then(res => {
                    console.log("success",res);
                    authenticate(res,()=>{
                    setFormData({ ...formData, email: '', password: '' });
                    toast.success(`Hey ${res.data.user.name}, Welcome back!`);
                    /**isAuth() !==false? console.log('authen'):console.log('nope');*/
                    isAuth() !==false? history.push('/builder'): history.push('/');
                    })
                    
                })
                .catch(err => {
                    console.log("error",err);
                    setFormData({ ...formData, email: '', password: '' });
                    toast.error(err.response.data.error);
                });

        }
        else {
            toast.error('Plase fill all details');
        }
    }

    if(isAuth()===false)
    {
    return (
        <>
            <ToastContainer />
            <Navig/>
            <div class="section" style={{paddingTop:"70px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"35px", fontSize:"25px"}}>SIGN IN</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                
                  <input class="form-field"     
                   type='email'
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                  />
                  <input
                    class="form-field"
                    type='password'
                    placeholder='Password'
                    onChange={handleChange('password')}
                    value={password}
                  />
                  
                  <button type='submit' class="button" style={{width:"100%", margin:"0px", marginBottom:"20px", backgroundColor:"#2e9dff"}}>Log In</button>
            </form>

            <br />
          <div style={{alignItems:"center", display:"inline-flex",marginBottom:"30px", width:"100%"}}>
              <div style={{flexGrow:"1", minWidth:"fit-content"}}><Link to='/users/password/forget' class="navigation-link" style={{padding:"0px"}}>forgot password? </Link></div>&nbsp;or
              <div style={{flexGrow:"1", minWidth:"fit-content"}}>
                  <Link to='/register' class="link-button">Sign Up</Link>
              </div>
          </div>

          </div>
          
          </div>
          </div>
        </div>
            <Footer/>
        </>
        
    );
    }
    else
    {
        return(<Redirect to='/builder' />);
    }
}

export default Login;

/**
 <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            {isAuth()!==false ? <Redirect to='/' /> : null}
            <ToastContainer />
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Sign In</h1>

                        <form
                            className='w-full flex-1 mt-8 text-indigo-500'
                            onSubmit={handleSubmit} >
                            <div className='mx-auto max-w-xs relative '>
                                
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type='email'
                                    placeholder='Email'
                                    onChange={handleChange('email')}
                                    value={email}
                                />
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type='password'
                                    placeholder='Password'
                                    onChange={handleChange('password')}
                                    value={password}
                                />
                                
                                <button
                                    type='submit'
                                    className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                                >
                                    <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2' />
                                    <span className='ml-3'>Sign In</span>
                                </button>
                                <Link to='/users/password/forget' className='no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2'>
                                    Forget password?
                                    </Link>
                            </div>
                            
                            <div className='flex flex-col items-center'>
                                <a
                                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
             bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                                    href='/register'
                                    target='_self'
                                >
                                    <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                                    <span className='ml-4'>Sign Up</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                {/**<div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${authSvg})` }}
            ></div>
            </div>***}
            </div>
        ;
        </div>*/