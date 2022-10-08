import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion , AnimatePresence } from 'framer-motion'
import { BsGlobe } from 'react-icons/bs'

function MobileNav({isOpened}) {
  return (
    <AnimatePresence>
      {isOpened && (
        <Main>
          <Container
            key={1}
            initial={{ x: 125 }}
            animate={{ x: [125, 0] }}
            exit={{ x: [0, 125], transition: { duration: 2, delay: 1 } }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              key={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [-10, 0] }}
              exit={{ opacity: 0 }}
              className='navList'
            >
              <Link className='link' to='/about-us'>
                About Us
              </Link>
              <p className='link'>Pricing</p>
              <Link className='link' to='/contact-us'>
                Contact Us
              </Link>
            </motion.div>
            <Right>
              <Language>
                <BsGlobe color='#fff' />
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
          </Container>
        </Main>
      )}
    </AnimatePresence>
  )
}

const Main = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`
const Container = styled(motion.div)`
  width: 70vw;
  height: 100vh;
  padding: 7rem 0;
  background-color: ${({ theme }) => theme.bgBlue};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10rem;
  flex-direction: column;
  .navList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
      .link {
          color: ${({ theme }) => theme.text2};
          font-size: 19px;
          font-weight: 500;
          
    }
  }
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;
 
  .signUp {
    background-color: ${({ theme }) => theme.bgRed};
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.text4};
    cursor: pointer;
  }
  .signIn {
    color: ${({ theme }) => theme.text2};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
`
const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  select {
    background-color: transparent;
    border-radius: 0.1rem;
    padding: 0.2rem;
    border-color: ${({ theme }) => theme.text2};
    color: ${({ theme }) => theme.text2};
    border-radius: 0.3rem;
    &:focus {
      outline: none;
    }
  }
`
export default MobileNav