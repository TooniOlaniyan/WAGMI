import React from 'react'
import styled from 'styled-components'
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineFlashOn} from 'react-icons/md'
import { SiFsecure } from 'react-icons/si'


function ChooseUs() {
  return (
    <Main>
      <div className='flag'>
        <div className='line' ></div>
        <svg
          width='40'
          height='20'
          viewBox='0 0 40 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='20' fill='#8F1B11'></rect>
          <rect y='11.1111' width='40' height='2.22223' fill='white'></rect>
          <rect y='15.5556' width='40' height='2.22223' fill='white'></rect>
          <rect y='6.66669' width='40' height='2.22223' fill='white'></rect>
          <rect y='2.22223' width='40' height='2.22223' fill='white'></rect>
          <rect width='15' height='8.88891' fill='#1B2F5A'></rect>
          <path
            d='M7.5 2L8.06129 3.72746L9.87764 3.72746L8.40818 4.79509L8.96946 6.52254L7.5 5.45492L6.03054 6.52254L6.59182 4.79508L5.12236 3.72746L6.93872 3.72746L7.5 2Z'
            fill='white'
          ></path>
        </svg>
        <div className='line' ></div>
      </div>
      <Card>
        <CardContent>
          <AiOutlineStar className='icon' />
          <h2>Trusted</h2>
          <p>1+ million happy users</p>
        </CardContent>
        <CardContentTwo>
          <MdOutlineFlashOn className='icon' />
          <h2>Fast</h2>
          <p>Make a Bitcion investment under 90 seconds</p>
        </CardContentTwo>
        <CardContentThree>
          <SiFsecure className='icon' />
          <h2>Secure</h2>
          <p>
            Online trades uses the highest level of security to ensure your
            information is completely protected
          </p>
        </CardContentThree>
      </Card>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  padding: 1rem 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  @media screen and (max-width: 450px) {
    padding: 0.5rem 0.8rem;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .line {
      width: 45vw;
      height: 1.6px;
      background-color: ${({ theme }) => theme.gray2};
      @media screen and (max-width: 450px) {
       width: 35vw;
        justify-content: space-between;
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
  @media screen and (max-width: 450px) {
   flex-direction: column;
  }
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.bgRed};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* padding: 1rem; */
  flex: 1;
  height: 10rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.text4};
  @media screen and (max-width: 450px) {
   width: 90vw;
   padding:1rem;
  }
  p {
    text-align: center;
  }
  h2 {
    font-weight: 800;
    font-size: 30px;
  }
  .icon {
    font-size: 35px;
  }
`
const CardContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.text2};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* padding: 1rem; */
  flex: 1;
  height: 10rem;
  border-radius: 1rem;
  @media screen and (max-width: 450px) {
    width: 90vw;
    padding:1rem;
  }
  p {
    text-align: center;
  }
  h2 {
    font-weight: 800;
    font-size: 30px;
  }
  .icon {
    font-size: 35px;
  }
`
const CardContentThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.bgBlue};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 0.7rem;
  flex: 1;
  height: 10rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.text4};
  @media screen and (max-width: 450px) {
    width: 90vw;
    padding:1rem;
  }
  p {
    text-align: center;
  }
  h2 {
    font-weight: 800;
    font-size: 30px;
  }
  .icon {
    font-size: 35px;
    color: ${({ theme }) => theme.text4};
  }
`

export default ChooseUs