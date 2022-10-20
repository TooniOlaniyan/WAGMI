import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {toast} from 'react-toastify'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import LoadingSpinner from '../components/LoadingSpinner'

function SignIn() {
  const navigate = useNavigate()
  const [loading , setLoading] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
    const { email, password } = formData
     const [isHidden, setIsHidden] = useState(false)

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          setLoading(true)
           const auth = getAuth()
             const userCredential = await signInWithEmailAndPassword(
               auth,
               email,
               password
             )
                if (userCredential.user) {
                navigate('/dashboard')
                }
                setLoading(false)
          
        } catch (error) {
           toast.error('Something went wrong')
           setLoading(false)
          
        }
        
      }
      const handleChange = (e) => {
           setFormData((prevState) => ({
             ...prevState,
             [e.target.id]: e.target.value,
           }))

      }
  return (
    <Main>
      <div className='logoContainer'>
        <img src={logo} alt='' />
        <Link to='/'>
          <p className='logo'>Trade Rebublic</p>
        </Link>
      </div>
      <div className='header'>
        <p className='head'>Log In</p>
      </div>
      <div className='flag'>
        <div className='line'></div>
        <svg
          width='40'
          height='20'
          viewBox='0 0 40 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='20' fill='#8F1B11'></rect>
          <rect y='11.1111' width='40' height='2.22223' fill='white'></rect>
          <rect y='15.5556' width='40' height='2.22223' fill='white'></rect>
          <rect y='6.66669' width='40' height='2.22223' fill='white'></rect>
          <rect y='2.22223' width='40' height='2.22223' fill='white'></rect>
          <rect width='15' height='8.88891' fill='#1B2F5A'></rect>
          <path
            d='M7.5 2L8.06129 3.72746L9.87764 3.72746L8.40818 4.79509L8.96946 6.52254L7.5 5.45492L6.03054 6.52254L6.59182 4.79508L5.12236 3.72746L6.93872 3.72746L7.5 2Z'
            fill='white'
          ></path>
        </svg>
        <div className='line'></div>
      </div>
      <Form onSubmit={handleSubmit} >
        <div className='formControl'>
          <label htmlFor=''>Email*</label>
          <input required type='text' id='email' value={email} onChange={handleChange} placeholder='Email' />
        </div>
        <div className='formControl'>
          <label htmlFor=''>Password*</label>
          <input
            className='formInput'
            type={isHidden ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            value={password}
            onChange={handleChange}
            required
          />
          {!isHidden ? (
            <AiOutlineEye
              onClick={() => setIsHidden(!isHidden)}
              className='icon'
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setIsHidden(!isHidden)}
              className='icon'
            />
          )}
        </div>
        <button style={{cursor: loading ? 'not-allowed' : 'pointer'}} >Log In {loading && <LoadingSpinner/>}    </button>
        <div className='forgotPassword' >
          <Link to='/forgot-password' >
          <p>Forgot Password ?</p>
          </Link>
        </div>
        <div className='checkAccount'>
          <p>Don't have an account?</p>
          <Link to='/sign-up' style={{ textDecoration: 'none' }}>
            <span>Sign Up</span> <BsArrowRight />
          </Link>
        </div>
      </Form>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  padding: 3rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.gray2};
  height: 100vh;
  .forgotPassword {
    justify-self: flex-end;
    width: 100%;
    a {
      text-decoration: none;
      text-align: end;
      color: ${({ theme }) => theme.bgRed};
      font-weight: 700;
    }
  }
  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .line {
      width: 45vw;
      height: 1.6px;
      background-color: ${({ theme }) => theme.gray};
      opacity: 0.6;
      @media screen and (max-width: 890px) {
        width: 35vw;
        justify-content: space-between;
      }
    }
  }
  .header {
    .head {
      font-size: 50px;
      font-weight: 400;
      font-family: 'Permanent Marker', cursive;
    }
  }
  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: baseline;
    /* background-color: green; */
    a {
      text-decoration: none;
    }
    img {
      width: 3.5rem;
      height: 2rem;
      object-fit: contain;
      @media screen and (max-width: 890px) {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    .logo {
      color: ${({ theme }) => theme.bgRed};
      font-size: 30px;
      font-weight: 700;
      font-family: 'Abyssinica SIL', serif;
      letter-spacing: 0.2rem;
      @media screen and (max-width: 890px) {
        font-size: 25px;
        letter-spacing: 0;
      }
    }
  }
  .checkAccount {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    @media screen and (max-width: 890px) {
      flex-direction: column;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.bgRed};
      display: flex;
      justify-content: center;
      gap: 1rem;
      font-weight: 900;
    }
  }
`
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 30vw;
    @media screen and (max-width: 890px) {
      width: 95vw;
    }

    padding: 0.5rem 1rem;
    button {
      width: 100%;
      padding: 0.5rem;
      border: none;
      font-size: 20px;
      background-color: ${({ theme }) => theme.bgRed};
      color: ${({ theme }) => theme.text2};
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    /* background-color: red; */
    .formControl {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      gap: 0.8rem;
      position: relative;
      .icon {
        position: absolute;
        top: 3rem;
        right: 1.5rem;
        font-size: 22px;
        cursor: pointer;
      }
      label {
        color: ${({ theme }) => theme.bgRed};
      }
      input,
      select {
        width: 100%;
        padding: 1rem 0.5rem;
        border: 2px solid ${({ theme }) => theme.gray};
        background-color: transparent;
      }
    }
  `

export default SignIn