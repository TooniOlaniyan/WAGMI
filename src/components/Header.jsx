import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsGlobe} from 'react-icons/bs'
import logo from '../assets/logo.jpg'
import { Slant as Hamburger } from 'hamburger-react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import MobileNav from './MobileNav'
import { AnimatePresence , motion } from 'framer-motion'


function Header() {
  const [isOpened, setIsOpened] = useState(false)
   const { scroll } = useLocomotiveScroll()
   const handleScroll = (id) => {
     let elem = document.querySelector(id)
     scroll.scrollTo(elem, {
       offset: '-200',
       duration: '1000',
       easing: [0.25, 0.0, 0.35, 1.0],
     })
    }
  return (
    <AnimatePresence onExitComplete={true}>
      <Main data-scroll-section>
        {isOpened && <MobileNav isOpened={isOpened} />}
        <div className='logoContainer'>
          <img src={logo} alt='' />
          <Link to='/'>
            <p className='logo'>Trade Rebublic</p>
          </Link>
        </div>
        {/* middle */}
        <Middle>
          <Link className='link' to='/about-us'>
            {' '}
            About Us{' '}
          </Link>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => handleScroll('#pricing')}
            className='link'
          >
            {' '}
            Pricing{' '}
          </p>
          <Link className='link' to='/contact-us'>
            {' '}
            Contact Us{' '}
          </Link>
        </Middle>
        {/* right */}

        <Right>
          <Language>
            <BsGlobe />
            <select name='language' id=''>
              <option value='english'>ENG</option>
            </select>
          </Language>
          <Link to='/sign-in'>
            <div className='signIn'>
              <p>Log In</p>
            </div>
          </Link>
          <Link to='/sign-up'>
            <div className='signUp'>
              <p>Sign Up</p>
            </div>
          </Link>
        </Right>
        <div>
          <Hamburger
            toggled={isOpened}
            toggle={setIsOpened}
            easing='ease-in'
            size={25}
            direction='left'
            color={isOpened ? '#fff' : '#000'}
          />
        </div>
      </Main>
    </AnimatePresence>
  )
}
const Main = styled.div`
  display: flex;
  padding: 1rem 3rem;
  justify-content: space-between;

  align-items: center;
  position: sticky;
  z-index:3;
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
    flex: 1;
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
  flex: 1;
  
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

  a,p {
    text-decoration: none;
    font-weight: 600;
    font-size: 17px;
    color: ${({ theme }) => theme.text1};
  }
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
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