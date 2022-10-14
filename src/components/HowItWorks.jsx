import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function HowItWorks() { 
  return (
    <Main data-scroll-section>
      <h2 className='header'>Get Started In Minutes</h2>
      <Card>
        <CardContent>
          <div className='number'>
            <p>1</p>
          </div>
          <h2>Register</h2>
          <p>Sign up to create your free account</p>
          <Link to='/sign-up'>
            <button>Sign up</button>
          </Link>
        </CardContent>
        <CardContentTwo>
          <div className='number'>
            <p>2</p>
          </div>
          <h2>Deposit and choose a trading plan</h2>
          <p>Invest and Buy digital assets 24/7</p>
          <Link to='sign-in'>
            <button>Get started</button>
          </Link>
        </CardContentTwo>
        <CardContentThree>
          <div className='number'>
            <p>3</p>
          </div>
          <h2>Get Profits and Withdraw</h2>
          <p>Sign up to create your free account</p>
          <Link to='sign-in' >
            <button>Get started</button>
          </Link>
        </CardContentThree>
      </Card>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  padding:3rem 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  .header {
    font-size: 45px;
    font-weight: 900;
    color: ${({ theme }) => theme.text1};
    font-family: 'Open Sans', sans-serif;
    @media screen and (max-width: 890px) {
     
      font-size: 30px;
      text-align: center;
      width: 100vw;
    }
  }
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  /* background-color: red; */
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.099) 0px 7px 29px 0px;
  padding: 3rem;
  flex: 1;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.text1};

  .number {
    border: 3px solid ${({ theme }) => theme.bgRed};
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 900;
      font-size: 19px;
      color: ${({ theme }) => theme.bgRed};
      
    }
  }
  h2 {
    font-weight: 800;
    font-size: 20px;
    text-align: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 3rem;
    font-size: 18px;
    background-color: ${({ theme }) => theme.bgBlue};
    color: ${({ theme }) => theme.text4};
    border: none;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      padding: 0.5rem 2rem;
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
  box-shadow: rgba(100, 100, 111, 0.099) 0px 7px 29px 0px;
  padding: 3rem;
  flex: 1;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.text1};
  .number {
    border: 3px solid ${({ theme }) => theme.bgBlue};
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 900;
      font-size: 17px;
      color: ${({ theme }) => theme.bgBlue};
      text-align: center;
    }
  }
  h2 {
    font-weight: 800;
    font-size: 20px;
    text-align: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    font-size: 18px;
    background-color: ${({ theme }) => theme.gray2};
    color: ${({ theme }) => theme.text1};
    border: none;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      padding: 0.5rem 2rem;
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
  box-shadow: rgba(100, 100, 111, 0.099) 0px 7px 29px 0px;
  padding: 3rem;
  flex: 1;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.text1};
  .number {
    border: 3px solid ${({ theme }) => theme.bgRed};
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 900;
      font-size: 17px;
      color: ${({ theme }) => theme.bgRed};
      text-align: center;
    }
  }
  h2 {
    font-weight: 800;
    font-size: 20px;
    text-align: center;
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
      padding: 0.5rem 2rem;
      font-size: 17px;
    }
  }
`

export default HowItWorks