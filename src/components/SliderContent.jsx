import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import styled from 'styled-components'

function SliderContent({name , testimony , src , icon}) {
  return (
    <Main>
      <p className='top'>{testimony}</p>
      <div className='bottom'>
        <img src={src} alt='' />
        <div>
          <p className='name' >{name}</p>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
  background-color: ${({ theme }) => theme.bgBlue};
  height: 40rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 1rem;
  @media screen and (max-width: 890px) {
    width: 90vw;
  }
  .top {
    font-size: 16px;
    font-weight: 700;
    line-height: 2.3rem;
    letter-spacing: 0.3rem;
    width: 70%;
    color: ${({ theme }) => theme.text2};
  }
  .bottom {
    width: 80%;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 890px) {
      flex-direction: column;
    }

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      @media screen and (max-width: 890px) {
        width: 4rem;
        height: 4rem;
      }
    }
    .name {
      font-size: 17px;
      font-weight: 900;
      color: ${({ theme }) => theme.bgRed};
      letter-spacing: 0.2rem;
    }
  }
`
export default SliderContent