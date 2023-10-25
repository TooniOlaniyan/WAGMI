import React from 'react'
import styled from 'styled-components'
import whoAre from '../assets/whoAre.png'
import sasuke from '../assets/sasuke.png'
import itachi from '../assets/itachi.jpg'
import tanjiro from '../assets/tanjiro.png'

function WhoWeAre() {
  return (
    <Main>
      <div className='aboutUs'>
        <Image>
          <img src={whoAre} alt='' />
        </Image>
        <Text>
          <h2>ABOUT US</h2>
          <p>
          Our Vision: Forging a Future of Financial Freedom

We are more than a fintech company; we are architects of your dreams. Our mission is to empower your BTC to do more than you ever imagined.

Innovation Unleashed: Pioneering fintech innovations, we're rewriting the rules of finance.
Partners in Prosperity: Your goals are our compass; we navigate towards your financial dreams.
Global Community: Dive into a world where investors are united in progress.
Discover the WAGMI story - where dreams meet action.
          </p>

        </Text>
      </div>

      <Peoples>
        <p className='header'>Our Verified Associates</p>
        <div className='people'>
          <div className='container'>
            <div className='imageContainer'>
              {' '}
              <img src={sasuke} alt='' />
            </div>
            <p className='name'>Uchia Sasuke-kan</p>
            
          </div>
          <div className='container'>
            <div className='imageContainer'>
              <img src={itachi} alt='' />
            </div>
            <p className='name'>Uchia Itachi-kan</p>
            
          </div>
          <div className='container'>
            <div className='imageContainer'>
              <img src={tanjiro} alt='' />
            </div>
            <p className='name'>Tanjiro Kamado</p>
          </div>
        </div>
      </Peoples>
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
  
  .aboutUs {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-direction: row-reverse;
    @media screen and (max-width: 890px) {
    flex-direction: column;
    }
  }
`
const Image = styled.div`
  flex: 1;
;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-size: 19px;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.gray};
    font-family: 'Abyssinica SIL', serif;
    font-weight: 900;
  }
  p {
    font-size: 19px;
    letter-spacing: 0.07rem;
    color: ${({ theme }) => theme.text1};
    font-weight: 500;
  }
`
const Peoples = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  .header {
    font-size: 25px;
    font-weight: 900;
    color: ${({ theme }) => theme.bgRed};
    text-decoration: underline;
  }
  p{
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    .name {
      font-weight: 700;
      font-size: 19px;
      color: ${({ theme }) => theme.bgRed};
    }
    .position {
      font-size: 19px;
      color: ${({ theme }) => theme.text1};
    }
    .imageContainer {
      width: 15rem;
      height: 15rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .people {
    display: flex;
    gap: 5rem;
    @media screen and (max-width: 890px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`



export default WhoWeAre