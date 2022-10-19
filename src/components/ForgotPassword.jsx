import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import {getAuth , sendPasswordResetEmail} from 'firebase/auth'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import Spinner from './Spinner'

function ForgotPassword() {
  const [loading , setLoading] = useState(false)
  const [resetEmail , setResetEmail] = useState({
    email:'',
  })
  const {email} = resetEmail
  const navigate = useNavigate()

  const handleChange = (e) => {
    setResetEmail((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value

    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        setLoading(true)
        const auth = getAuth()
        await sendPasswordResetEmail(auth, email)
        toast.success('Password Link sent to your email')
        navigate('/sign-in')
        setLoading(false)
      
    } catch (error) {
      toast.error('Something went wrong, try again')
      setLoading(false)
      
    }
  
   

  }
  if(loading){
    return(
      <Spinner/>
    )
  }
  return (
    <Main>
      <Header />
      <PasswordReset>
        <div className='passwordResetContainer'>
            <p className='logIn'>Log In</p>
            <p className='reset'>Password Reset</p>
        </div>
        <Form  onSubmit={handleSubmit} >
          <div className='formControl'>
            <label htmlFor=''>Email*</label>
            <input onChange={handleChange} required id='email' value={email} type='text' placeholder='Enter your Email' />
          </div>
          <button>Request Password Reset</button>
        </Form>
      </PasswordReset>
      <Footer />
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
`
const PasswordReset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  .passwordResetContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    .reset {
      font-size: 25px;
      font-weight: 500;
      color: ${({ theme }) => theme.bgBlue};
    }
    .logIn {
      font-size: 19px;
      color: ${({ theme }) => theme.gray};
    }
  }
  .header {
    .head {
      font-size: 50px;
      font-weight: 400;
      font-family: 'Permanent Marker', cursive;
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
    .formControl {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      gap: 0.8rem;
      position: relative;
      label {
        color: ${({ theme }) => theme.bgRed};
      }
      input {
        width: 100%;
        padding: 1rem 0.5rem;
        border: 2px solid ${({ theme }) => theme.gray};
        background-color: transparent;
      }
    }
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
  `

export default ForgotPassword