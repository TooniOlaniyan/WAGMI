import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsGlobe} from 'react-icons/bs'
import logo from '../assets/logo.jpg'
import { Slant as Hamburger } from 'hamburger-react'

function Header() {
  return (
    <Main>
      <div className='logoContainer'>
        <img src={logo} alt='' />
        <Link to='/' >
          <p className='logo'>Trade Rebublic</p>
        </Link>
      </div>
      {/* middle */}
      <Middle>
        <Link className='link' to='/about-us'> About Us </Link>
        <Link className='link' to='/pricing'> Pricing </Link>
        <Link className='link' to='/contact-us'> Contact Us </Link>
      </Middle>
      {/* right */}

      <Right>
        <Language>
          <BsGlobe />
          <select name='language' id=''>
            <option value='english'>ENG</option>
            <option value='spanish'>Spanish</option>
          </select>
        </Language>
        <div className='signIn' >
          <p>Log In</p>
        </div>
        <div className='signUp'>
          <p>Sign Up</p>
        </div>
      </Right>
      <Hamburger/>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  padding: 1rem 3rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.text2};
  @media screen and (max-width: 450px) {
    padding: 0.5rem 0.8rem;
    justify-content: space-between;
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
      width: 2.5rem;
      height: 2rem;
      @media screen and (max-width: 450px) {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    .logo {
      color: ${({ theme }) => theme.bgRed};
      font-size: 25px;
      font-weight: 700;
      font-family: 'Abyssinica SIL', serif;
      letter-spacing: 0.2rem;
      @media screen and (max-width: 450px) {
        font-size: 19px;
        letter-spacing: 0;
      }
    }
  }
  .hamburger-react {
    display: none;
    @media screen and (max-width: 450px) {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.bgBlue};
      z-index: 2;
    }
  }
`
const Middle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width:450px) {
    display: none;
    
  }

  .link {
    position: relative;
    padding: 0.3rem 0;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.bgRed};
      transition: all 0.5s ease-out;
    }
    &:hover::after {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 17px;
    color: ${({ theme }) => theme.text1};
  }
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 450px) {
    display: none;
  }
  .signUp {
    background-color: ${({ theme }) => theme.bgRed};
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.text4};
    cursor: pointer;
  }
  .signIn {
    color: ${({ theme }) => theme.text1};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
`
const Language = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
  gap: 0.2rem;
  select {
    background-color: transparent;
    border-radius: 0.1rem;
    padding: 0.2rem;
    border-color: ${({ theme }) => theme.gray};
    border-radius: 0.3rem;
    &:focus {
      outline: none;
    }
  }
`
export default Header