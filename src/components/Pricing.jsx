import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {AiOutlineCheck} from 'react-icons/ai'

function Pricing() {
  return (
    <Main data-scroll-section id='pricing'>
      <div className='top'>
        <h2 className='header'>Choose from flexible investment plans</h2>
        <p>
          Our goal is to provide our investors with a reliable source of income
          while, minimizing any possible risk and offer a high-quality service.
        </p>
      </div>
      <Card>
        <CardContent>
          <p className='head'>Regular</p>
          <p className='price'>$2,000 - $19,999</p>
          <p>
            <AiOutlineCheck /> Min. deposit: $2,000{' '}
          </p>
          <p>
            <AiOutlineCheck /> Max. deposit: $19,999{' '}
          </p>
          <p>
            <AiOutlineCheck /> Max. return: 150% + Capital{' '}
          </p>
          <Link style={{textDecoration: 'none'}} to='sign-in' >
          <button>Invest Now</button></Link>
        </CardContent>
        <CardContentTwo>
          <p className='head'>Premium</p>
          <p className='price'>$20,000 - $49,999</p>
          <p>
            <AiOutlineCheck /> Min. deposit: $20000{' '}
          </p>
          <p>
            <AiOutlineCheck /> Max. deposit: $49,999{' '}
          </p>
          <p>
            <AiOutlineCheck /> Max. return: 160% + Capital{' '}
          </p>
          <Link style={{textDecoration: 'none'}} to='sign-in' >
          <button>Invest Now</button></Link>
          <p className='mostPopular'>Most Popular</p>
        </CardContentTwo>
        <CardContentThree>
          <p className='head'>Diamond</p>
          <p className='price'>$50,000 - Max</p>
          <p>
            <AiOutlineCheck /> Min. deposit: $50,000{' '}
          </p>
          <p>
            <AiOutlineCheck /> Max. deposit: $Max{' '}
          </p>
          <p>
            <AiOutlineCheck /> Max. return: 200% + Capital{' '}
          </p>
          <Link style={{textDecoration: 'none'}} to='sign-in' >
          <button>Invest Now</button></Link>
        </CardContentThree>
      </Card>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem;
  gap: 4rem;
  flex-direction: column;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.text1};
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 30px;
      font-weight: 900;
      color: ${({ theme }) => theme.text2};
      @media screen and (max-width: 890px) {
        font-size: 25px;
        text-align: center;
      }
    }
    p {
      color: ${({ theme }) => theme.gray};
      width: 70%;
      font-size: 20px;
      text-align: center;
      margin-top: 1rem;
      @media screen and (max-width: 890px) {
        width: 100%;
      }
    }
  }
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* background-color: red; */
  @media screen and (max-width: 890px) {
    flex-direction: column;
    gap: 3rem;
  }
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: ${({ theme }) => theme.text2};
  padding: 2rem 1rem;
  flex: 1;
  @media screen and (max-width: 890px) {
    width: 80vw;
  }
  .head {
    font-size: 22px;
    font-weight: 700;
  }
  .price {
    font-size: 19px;
    font-weight: 500;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    font-size: 18px;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.text4};
    border: none;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      width: max-content;
      font-size: 17px;
    }
  }
`
const CardContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.text2};
  padding: 4rem 1rem;
  flex: 1;
  gap: 2rem;
  position: relative;
  @media screen and (max-width: 890px) {
    width: 80vw;
  }
  .head {
    font-size: 22px;
    font-weight: 700;
  }
  .price {
    font-size: 19px;
    font-weight: 500;
  }
  .mostPopular {
    position: absolute;
    top: -1.5rem;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.text2};
    padding: 1rem 2rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    font-size: 18px;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.text4};
    border: none;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      width: max-content;
      font-size: 17px;
    }
  }
`
const CardContentThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.text2};
  padding: 2rem 1rem;
  flex: 1;
  gap: 2rem;
  @media screen and (max-width: 890px) {
    width: 80vw;
  }
  .head {
    font-size: 22px;
    font-weight: 700;
  }
  .price {
    font-size: 19px;
    font-weight: 500;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    font-size: 18px;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.text4};
    border: none;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      width: max-content;
      font-size: 17px;
    }
  }
`

export default Pricing