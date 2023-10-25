import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import {Link , NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'
import {MdDashboard} from 'react-icons/md'
import { GiBuyCard, GiWallet , } from 'react-icons/gi'
import {FaHistory , FaScroll} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
function DashboardSideBar() {
  return (
    <Main>
      <div className='logoContainer'>
        <p>WAGMI</p>
      </div>
      <div className='logo'>
        {/* <img src={logo} alt='' /> */}
      </div>
      <div className='flag'>
        <div className='line'></div>
   
        <div className='line'></div>
      </div>

      <Links>
        <NavLink to='/dashboard'>
          <div className='links'>
            <div className='imageContainer'>
              <motion.div transition={{ duration: 1 }} className='image'>
                <MdDashboard />
              </motion.div>
            </div>
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink to='/fund-account'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <GiBuyCard />
              </div>
            </div>
            <p>Fund Account</p>
          </div>
        </NavLink>
        <NavLink to='/withdraw'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <FaScroll />
              </div>
            </div>
            <p>Withdraw</p>
          </div>
        </NavLink>
        <NavLink to='/transactions'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <FaHistory />
              </div>
            </div>
            <p>Transactions</p>
          </div>
        </NavLink>
        <NavLink to='/invest'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <GiWallet />
              </div>
            </div>
            <p>Invest</p>
          </div>
        </NavLink>
        <NavLink to='/settings'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <FiSettings />
              </div>
            </div>
            <p>Settings</p>
          </div>
        </NavLink>
      </Links>
    </Main>
  )
}
const Main = styled.div`
  transition: all 0.5s;
  height: 100vh;
  gap: 3rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1.13;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .line {
      width: 5vw;
      height: 1.6px;
      background-color: ${({ theme }) => theme.gray2};
      @media screen and (max-width: 890px) {
        width: 35vw;
        justify-content: space-between;
      }
    }
  }
  .logoContainer {
    p {
      font-size: 24px;
      font-weight: 800;
      color: ${({ theme }) => theme.bgBlue};
    }
  }
  .logo {
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
  @media screen and (max-width: 890px) {
    display: none;
  }
`


const Links = styled.div`
  width: 100%;

  a.active {
    background-color: green;
    p {
      color: ${({ theme }) => theme.bgRed};
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;

      .image {
        width: 45%;
        height: 105%;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 17px 20px 0 rgb(27 50 60 / 16%);
        background-color: ${({ theme }) => theme.bgBlue};
        svg {
          color: ${({ theme }) => theme.text2};
        }
      }
    }
  }
  .links {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 4.5rem;
    width: 100%;

    .imageContainer {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: ${({ theme }) => theme.gray};
        font-size: 25px;
      }
    }
    p {
      font-size: 18px;
      color: ${({ theme }) => theme.gray};

      font-weight: 700;
      text-align: start;
      flex: 1;
      width: max-content;
    }
  }

  a {
    text-decoration: none;
    transition: all 1s;
  }
`

export default DashboardSideBar