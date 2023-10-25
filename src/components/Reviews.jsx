import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderContent from './SliderContent'
import testUser from '../assets/testUser.png'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { BsFillArrowRightCircleFill , BsStarFill } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'
import guyitaro from '../assets/guyitaro.jpg'
import gyokko from '../assets/gyokko.png'
import kokushibo from '../assets/kokushibo.png'
import akaza from '../assets/akaza.jpg'



function Reviews() {
  return (
    <Main data-scroll-section>
      <div className='top'>
        <h2 className='header'>Reviews</h2>
        <p>Don't just take our word for it</p>
      </div>
      <Review>
        <p>
          <span>
            {' '}
            Hear from our <br /> Customers
          </span>
          <div>
            <BsStarFill style={{ color: '#f9a602' }} />
            <BsStarFill style={{ color: '#f9a602' }} />
            <BsStarFill style={{ color: '#f9a602' }} />
            <BsStarFill style={{ color: '#f9a602' }} />
            <BsStarFill style={{ color: '#f9a602' }} />
          </div>
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
                testimony='At first i was a bit skeptical about this, but after my first investment, i got my profits and my capital investment sent to my wallet immediately.'
                src={akaza}
                name='Akaza'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                testimony='This platform is really made for people like us. 234pay gave me a second chance, and i took it and never regreted. '
                src={kokushibo}
                name='Kokushibo'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                testimony="This platform has made me and my family financially stable admist our country's hyperInfation. i'd advice y'all take part in it's investment plans."
                src={guyitaro}
                name='Guyitaro'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                testimony="It an easy platform to use, and the payments are fast and hassle free."
                src={gyokko}
                name='Gyokko'
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
      @media screen and (max-width: 890px) {
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
      @media screen and (max-width: 890px) {
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
  @media screen and (max-width: 890px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 90vw;
  }
  p {
    font-size: 35px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    div{
      display: flex;
      gap: 0.4rem;
    }
    @media screen and (max-width: 890px) {
     font-size: 20px;
     text-align: center;
    }
  }
`
const Slides = styled.div`
  height: 40rem;
  width: 40rem;

  position: relative;
  @media screen and (max-width: 890px) {
    width: 100%;
    margin: 0 auto;
  }
  .left {
    position: absolute;
    left: 0.5rem;
    top: 10%;
    color: ${({ theme }) => theme.bgRed};
    font-size: 30px;
    z-index: 2;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      display: none;
    }
  }
  .right {
    position: absolute;
    right: 0.5rem;
    top: 10%;
    color: ${({ theme }) => theme.bgRed};
    font-size: 30px;
    z-index: 2;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      display: none;
    }
  }
  .mySwiper {
    width: 100%;
    height: 100%;
  }
`

export default Reviews