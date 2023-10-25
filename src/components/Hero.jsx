import React from 'react'
import styled from 'styled-components'
import hero3 from '../assets/hero3.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <Main data-scroll-section>
      <Text>
        <p className='title'>
        Embrace Tomorrow's Wealth Today with WAGMI

        </p>
<p>Welcome to the portal where Bitcoin isn't just currency; it's your key to prosperity. WAGMI, the gateway to a brighter financial future. Invest, watch, and thrive.
Invest with Confidence: Explore secure BTC investments that elevate your financial journey.
BTC that Thrives: Our advanced tools multiply your BTC's potential, shaping a thriving future.
Global Impact: Join an international community of forward-thinkers who invest in tomorrow.
Join the pioneers of wealth creation. Join WAGMI.</p>

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
  // background-color: ${({ theme }) => theme.bgBlue};
  padding: 5rem;
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
  gap: 3rem;
  @media screen and (max-width: 890px) {
    width: 93vw;
    gap: 3rem;
    
  }
  p {
    font-size: 18px;
    line-height: 2.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text1};
  }
  .title{
    color:${({ theme }) => theme.bgRed};
    font-size:70px;
    line-height:2.8rem;
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
      width: max-content;
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
    width: 25rem;
    height: 25rem;
    object-fit: fill;
    border-radius: 0.5rem;
    @media screen and (max-width: 890px) {
        width: 95vw;
      
    }
  }
`

export default Hero