import React from 'react'
import styled from 'styled-components'
import hero3 from '../assets/hero3.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <Main data-scroll-section>
      <Text>
        <p>
          Trade Republic is a conservative investment platform for elite
          Republicans that provides you with the most necessary features that
          will make your experience better. Not only do we guarantee the fastest
          and the most exciting returns on your investments, we also guarantee
          the security of your investments.
        </p>

        <Link to='/sign-up' >
          <button>Get Started</button>
        </Link>
      </Text>
      <Image>
        <img src={hero3} alt='' />
      </Image>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgBlue};
  padding: 5rem 3rem;
  gap: 10rem;
  @media screen and (max-width: 890px) {
    flex-direction: column;
    width: 100vw;
    padding: 3rem;
    gap: 6rem;
  }
`
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media screen and (max-width: 890px) {
    width: 90vw;
    gap: 3rem;
  }
  p {
    font-size: 17px;
    line-height: 2.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text4};
  }
  button {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 3rem;
    font-size: 18px;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.text4};
    border: none;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      width: 50%;
      font-size: 17px;
    }
  }

  /* background-color: red; */
`
const Image = styled.div`
  /* background-color: teal; */
  justify-content: center;
  align-items: center;
  flex: 1;
  img {
    width: 30rem;
    height: 30rem;
    object-fit: fill;
    border-radius: 0.5rem;
    @media screen and (max-width: 890px) {
        width: 95vw;
      
    }
  }
`

export default Hero