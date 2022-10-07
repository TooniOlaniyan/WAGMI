import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderContent from './SliderContent'
import testUser from '../assets/testUser.png'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import hero1 from '../assets/hero1.jpg'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'



function Reviews() {
  return (
    <Main>
      <div className='top'>
        <h2 className='header'>Reviews</h2>
        <p>Don't just take our word for it</p>
      </div>
      <Review>
        <p>
          Hear from our <br /> Customers
        </p>
        <Slides>
          <BsFillArrowLeftCircleFill className='left .swiper-custom-navigation swiper-custom-navigation-prev backNavigate' />
          <BsFillArrowRightCircleFill className='.swiper-custom-navigation swiper-custom-navigation-next frontNavigate right' />
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-custom-navigation-prev',
              nextEl: '.swiper-custom-navigation-next',
            }}
            spaceBetween={3}
            className='mySwiper'
          >
            <SwiperSlide>
              <SliderContent
                testimony='We love the approachable format and the fact that it chose to feature customers that users can relate to. When you click into any story, you can read the whole case study in a Q&A format.'
                src={hero1}
                name='August Britini'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                testimony='We love the approachable format and the fact that it chose to feature customers that users can relate to. When you click into any story, you can read the whole case study in a Q&A format.'
                src={hero1}
                name='August Britini'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                testimony='We love the approachable format and the fact that it chose to feature customers that users can relate to. When you click into any story, you can read the whole case study in a Q&A format.'
                src={hero1}
                name='August Britini'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                testimony='We love the approachable format and the fact that it chose to feature customers that users can relate to. When you click into any story, you can read the whole case study in a Q&A format.'
                src={hero1}
                name='August Britini'
              />
            </SwiperSlide>
          </Swiper>
        </Slides>
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
        font-size: 27px;
      }
    }
  }
`
const Review = styled.div`
  display: flex;
  justify-content: center;
  gap: 15rem;
  align-items: flex-start;
  /* background-color: green; */
  width: 100%;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 90vw;
  }
  p {
    font-size: 35px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
    @media screen and (max-width: 450px) {
     font-size: 20px;
     text-align: center;
    }
  }
`
const Slides = styled.div`
  height: 40rem;
  width: 40rem;
  
  position: relative;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0 auto;
  }
  .left {
    position: absolute;
    left: -1rem;
    top: 25%;
    color: ${({ theme }) => theme.bgRed};
    font-size: 30px;
    z-index: 2;
    cursor: pointer;
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
  .right {
    position: absolute;
    right: -1rem;
    top: 25%;
    color: ${({ theme }) => theme.bgRed};
    font-size: 30px;
    z-index: 2;
    cursor: pointer;
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
  .mySwiper {
    width: 100%;
    height: 100%;
  }
`

export default Reviews