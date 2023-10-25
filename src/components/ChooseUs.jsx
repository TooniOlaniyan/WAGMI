import React from 'react'
import styled from 'styled-components'
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineFlashOn} from 'react-icons/md'
import { SiFsecure } from 'react-icons/si'


function ChooseUs() {
  return (
    <Main data-scroll-section>
      <div className='flag'>
        <div className='line'></div>

        <div className='line'></div>
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
  padding: 3rem 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  @media screen and (max-width: 890px) {
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
      @media screen and (max-width: 890px) {
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
  background-color: ${({ theme }) => theme.bgRed};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* padding: 1rem; */
  flex: 1;
  height: 10rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.text4};
  @media screen and (max-width: 890px) {
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
  @media screen and (max-width: 890px) {
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
  @media screen and (max-width: 890px) {
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