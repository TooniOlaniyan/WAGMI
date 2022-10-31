import React from 'react'
import { motion } from 'framer-motion'
import { Link , useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {getAuth} from 'firebase/auth'
function DashboardMobileNav() {
    const navigate = useNavigate()
    const auth = getAuth()
    const handleClick = () => {
      auth.signOut()
      navigate('/sign-in')
    }




  return (
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
          <Link className='link' to='/dashboard'>
            Dashboard
          </Link>
          <Link className='link' to='/fund-account'>
            Fund Account
          </Link>
          <Link className='link' to='/withdraw'>
            Withdraw
          </Link>

          <Link className='link' to='/transactions'>
            Transactions
          </Link>
          <Link className='link' to='/invest'>
            Invest
          </Link>
          <Link className='link' to='/settings'>
            Settings
          </Link>

          <p onClick={handleClick} className='link logout'>
            Logout
          </p>
        </motion.div>
      </Container>
    </Main>
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
  gap: 3rem;
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
    .logout {
      color: ${({ theme }) => theme.bgRed};
      font-size: 20px;
      font-weight: 700;
    }
  }
`
 const Right = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   .logOut {
     @media screen and (max-width: 890px) {
       display: flex;
     }
     .logOutBtn {
       @media screen and (max-width: 890px) {
         display: flex;
       }
       cursor: pointer;
     }
     .hamburger-react {
       display: none;
       @media screen and (max-width: 890px) {
         display: flex;
         justify-content: center;
         align-items: center;

         z-index: 2;
       }
     }
   }
 `

export default DashboardMobileNav