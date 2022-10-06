import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderContent from './SliderContent'
import testUser from '../assets/testUser.png'
import 'swiper/css'


function Reviews() {
  return (
    <Main>
      <div className='top'>
        <h2 className='header'>Reviews</h2>
        <p>Don't just take our word for it</p>
      </div>
      <Review>
        <p>Slider</p>
       
      </Review>
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
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 17px;
      font-weight: 700;
      color: ${({ theme }) => theme.gray};
      @media screen and (max-width: 450px) {
        font-size: 25px;
        text-align: center;
      }
    }
    p {
      color: ${({ theme }) => theme.text1};
      font-size: 40px;
      text-align: center;
      margin-top: 1rem;
      font-weight: 900;
      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
  }
`
const Review = styled.div`

  
`

export default Reviews