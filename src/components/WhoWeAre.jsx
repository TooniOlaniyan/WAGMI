import React from 'react'
import styled from 'styled-components'
import whoAre from '../assets/whoAre.jpg'
import miller from '../assets/miller.jpg'
import steve from '../assets/steve.jpg'

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
            Trade Republic is a National success and trust worthy Crypto
            currency investment platform with the most convenient trading
            interface. Instant access to more than 100 assets of the world's
            leading companies. We offer lucrative crypto currency investments,
            Our high profits are achieved through the use of modern systems and
            technologies for crypto currency trading. The company cooperates
            with the largest firms in several countries (United Kingdom, United
            States of America, Australia, Canada, Germany, Japan and China)
            together we have formed a large (Global) network that has high
            performance and strong potentials.
          </p>
        </Text>
      </div>

      <Peoples>
        <p className='header'>Our Verified Associates</p>
        <div className='people'>
          <div className='container'>
            <div className='imageContainer'>
              {' '}
              <img src={miller} alt='' />
            </div>
            <p className='name'>name</p>
            <p className='position'>position</p>
          </div>
          <div className='container'>
            <div className='imageContainer'>
              <img src={steve} alt='' />
            </div>
            <p className='name'>name</p>
            <p className='position'>position</p>
          </div>
          <div className='container'>
            <div className='imageContainer'>
              <img src={miller} alt='' />
            </div>
            <p className='name'>name</p>
            <p className='positin'>position</p>
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
    @media screen and (max-width: 450px) {
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
      border-radius: 50%;
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
    @media screen and (max-width: 450px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`



export default WhoWeAre