import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import {Link , NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'
import {MdDashboard} from 'react-icons/md'
import { GiBuyCard, GiWallet } from 'react-icons/gi'
import {FaHistory} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
function DashboardSideBar() {
  return (
    <Main>
      <div className='logoContainer'>
        <p>Trade Rebublic</p>
      </div>
      <div className='logo'>
        <img src={logo} alt='' />
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
      @media screen and (max-width: 450px) {
        width: 35vw;
        justify-content: space-between;
      }
    }
  }
  .logoContainer {
    p {
      font-size: 30px;
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