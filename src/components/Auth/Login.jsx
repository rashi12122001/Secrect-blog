import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api.js';
import logo from '../LOGO.png';
import welcome from '../welcome.png';
import './Login.css';
import { DataContext } from '../../context/DataProvider';
//css
const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Page = styled(Box)`
margin-top:40px;
display: flex;
    flex: 2;
    flex-direction: row;
    justify-content: space-evenly;
`;
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #1A8061;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    color: #1A8061;
    height: 48px;
    border:1px solid #1A8061;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
//js
function Login() {
    
const loginInitialValues = {
    username: '',
    password: ''
};
        const signupInitialValues = {
          name: '',
          username: '',
          password: '',
        };
        const [login, setLogin] = useState(loginInitialValues);
        const [signup, setSignup] = useState(signupInitialValues);

  const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
  }
// loggin up the user :) mera pura code sirf iske karan khrab hua hai i hate u mern stack 
const loginUser = async () => {
    try {
      let response = await API.userLogin(login);

      if (response.isSuccess) {
        showError('');
        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ name: response.data.name, username: response.data.username });
        isUserAuthenticated(true); //error is here??
        setLogin(loginInitialValues);
        navigate('/home');
      } else {
        showError('Something went wrong! Please try again later.');
      }
    } catch (error) {
      console.error('Login error:', error);
      showError('An unexpected error occurred. Please try again.');
    }
  };
  //signup is wokring chlo
  const signupUser = async () => {
      let response = await API.userSignup(signup);
      if (response.isSuccess) {
          showError('');
          setSignup(signupInitialValues);
          toggleAccount('login');
      } else {
          showError('Something went wrong! please try again later');
      }
  }

  const toggleSignup = () => {
      account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }
        
        return (
          <Page>
      {/* <img src={welcome} alt="logo" className='welcome'/> */}
          <Component>
      <Box>
      <img src={logo} alt="logo" className='logo'/>
      {
        account === 'login' ?
      <Wrapper>
      <TextField variant='standard' name='username' label='Enter Username' value={login.username} onChange={(e) => onValueChange(e)}/>
      <TextField variant='standard' name='password' label='Enter password' value={login.password} onChange={(e) => onValueChange(e)}/>
      {error && <Error>{error}</Error>}
      <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
      <Text style={{ textAlign: 'center' }}>OR</Text>
<SignupButton variant="outlined" onClick={() => toggleSignup()} >Signup</SignupButton>
      </Wrapper> :
      //signup one below
      <Wrapper> 
      <TextField variant="standard" name='name' label='Enter email'  onChange={(e) => onInputChange(e)}/>
      <TextField variant="standard" name='username' label='Enter Username' onChange={(e) => onInputChange(e)}/>
      <TextField variant="standard" name='password' label='Create Password' onChange={(e) => onInputChange(e)}/>

      <SignupButton onClick={() => signupUser()}  >Signup</SignupButton>
      <Text style={{ textAlign: 'center' }}>OR</Text>
      <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
  </Wrapper>

      }
      </Box>
    </Component>
          </Page>
  );
}

export default Login
