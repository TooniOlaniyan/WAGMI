import React from 'react'
import styled from 'styled-components'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
function Footer() {
  const year = new Date().getFullYear()
  return (
    <Main>
      <Top>
        <Details>
          <p className='head' >Trade Rebublic</p>
          <p className='title'>
            Trade Republic is a conservative investment platform for elite
            Republicans that provides you with the most necessary features that
            will make your experience better.
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
          <p>About Us</p>
          <p>Register</p>
        </Links>
        <Address>Address</Address>
      </Top>
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

      <div className='copyright'>
        <p>
          &#169; {year} <span>Trade Republic</span> copyright. All rights reserved
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
      @media screen and (max-width: 450px) {
        width: 35vw;
        justify-content: space-between;
      }
    }
  }
  .copyright {
    p {
      color: ${({ theme }) => theme.gray};
      @media screen and (max-width: 450px) {
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
  @media screen and (max-width: 450px) {
  align-items: center;
  }
  .head {
    font-size: 25px;
    font-weight: 800;
    color: ${({ theme }) => theme.bgBlue};
  }
  .title {
    font-size: 13px;
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
      @media screen and (max-width: 450px) {
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
  @media screen and (max-width: 450px) {
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
  }
`
const Address = styled.div`
flex: 1;
  
`
export default Footer