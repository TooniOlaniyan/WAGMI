import React from 'react'
import styled from 'styled-components'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Footer() {
  const year = new Date().getFullYear()
  return (
    <Main data-scroll-section>
      <Top>
        <Details>
          <p className='head'>WAGMI</p>
          <p className='title'>
          Discover the Magic of BTC with WAGMI

Tired of your Bitcoin just gathering digital dust? Join WAGMI and turn 
it into a source of joy and growth. It's as easy as investing, watching, and smiling!
          </p>
          <Socials>
            <div className='social'>
              <BsFacebook className='icon' />
            </div>
            <div className='social'>
              <BsTwitter className='icon' />
            </div>
          </Socials>
        </Details>
        <Links>
          <h2>Links</h2>
          <p>Home</p>
          <Link to='/about-us' >
            <p>About Us</p>
          </Link>
          <Link to='/sign-up' >
            <p>Register</p>
          </Link>
          <Link to='/sign-in'>
            <p>Invest Now</p>
          </Link>
        </Links>
      </Top>
      <div className='flag'>
        <div className='line'></div>
      
        <div className='line'></div>
      </div>

      <div className='copyright'>
        <p>
          &#169; {year} <span>WAGMI</span> copyright. All rights
          reserved
        </p>
      </div>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  padding: 3rem 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.gray2};
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
  .copyright {
    p {
      color: ${({ theme }) => theme.gray};
      @media screen and (max-width: 890px) {
       text-align: center;
      }
    }
  }
`
const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: 890px) {
  align-items: center;
  }
  .head {
    font-size: 25px;
    font-weight: 800;
    color: ${({ theme }) => theme.bgBlue};
  }
  .title {
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray};
  }
`
const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.gray};
    opacity: 0.7;
    .icon {
      font-size: 25px;
      @media screen and (max-width: 890px) {
       font-size: 20px;
      }
    }
  }
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 890px) {
 flex-direction: column;
  }
`
const Links = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  h2 {
    font-size: 25px;
    font-weight: 800;
    color: ${({ theme }) => theme.bgBlue};
  }
  p {
    color: ${({ theme }) => theme.gray};
    font-size: 20px;
  }
`
const Address = styled.div`
flex: 1;
  
`
export default Footer