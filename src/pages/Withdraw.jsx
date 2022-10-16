import React , {useState} from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardSideBar from '../components/DashboardSideBar'
import styled from 'styled-components'
import { IoLogoBitcoin } from 'react-icons/io'
import { BsBank2 } from 'react-icons/bs'
import Withdrawl from '../components/modals/Withdrawl'
import ViaBank from '../components/modals/ViaBank'

function Withdraw() {
  const [bitcion , setBitcoin] = useState(false)
  const [bank , setBank] = useState(false)
  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content>
          <div className='fund'>
            <p>Withdraw Funds</p>
          </div>
          <CardContainer>
            {bitcion ? <Withdrawl setBitcoin={setBitcoin}/>: null}
            {bank ? <ViaBank setBank={setBank}/>: null}
            <CardOne>
              <div className='top'>
                <IoLogoBitcoin />
                <div>
                  <p> Via Bitcion</p>
                  <p>Limit: 1,000-9,000,000</p>
                  <p>Charge: 50 USD + 0% </p>
                </div>
              </div>
              <button onClick={() => setBitcoin(true)} >Request Withdraw</button>
            </CardOne>
            <CardTwo>
              <div className='top'>
                <BsBank2 />
                <div className='test'>
                  <p>Bank Transfer</p>
                  <p>Limit: 5,000-9,000,000</p>
                  <p>Charge: 50 USD + 0% </p>
                </div>
              </div>
              <button onClick={() => setBank(true)} >Request Withdraw</button>
            </CardTwo>
          </CardContainer>
        </Content>
      </MainContainer>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
`

const MainContainer = styled.div`
  display: flex;
  flex: 4.5;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s;
  @media screen and (max-width: 640px) {
    /* background-color: red; */
    /* overflow: hidden; */
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.1rem 6rem 3rem 6rem;
  height: 83vh;
  overflow-y: scroll;
  @media screen and (max-width: 890px) {
    height: 100vh;
    padding: 0.5rem;
    align-items: flex-start;
  }
  .fund {
    p {
      font-size: 30px;
      font-weight: 700;
      color: ${({ theme }) => theme.bgBlue};
    }
  }
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`
const CardOne = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.bgBlue};
  flex-direction: column;
  padding: 3rem;
  color: ${({ theme }) => theme.text2};
  gap: 2rem;
  border-radius: 1rem;
  @media screen and (max-width: 890px) {
    padding: 1.5rem;
    width: 90vw;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media screen and (max-width: 890px) {
      align-items: flex-start;
      justify-content: flex-start;
    }
    div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
      @media screen and (max-width: 890px) {
        gap: 1rem;
      }
    }
    svg {
      font-size: 100px;
      border: 2px solid ${({ theme }) => theme.bgRed};
      border-radius: 50%;
      padding: 1rem;
      @media screen and (max-width: 890px) {
        font-size: 90px;
      }
    }
  }
  button {
    background-color: ${({ theme }) => theme.bgRed};
    border: none;
    padding: 0.6rem;
    border-radius: 0.3rem;
    width: 40%;
    color: ${({ theme }) => theme.gray2};
    cursor: pointer;
    @media screen and (max-width: 890px) {
      width: max-content;
    }
  }
`
const CardTwo = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.gray};
  flex-direction: column;
  padding: 3rem;
  color: ${({ theme }) => theme.text2};
  gap: 2rem;
  border-radius: 1rem;
  @media screen and (max-width: 890px) {
    padding: 1.5rem;
    width: 90vw;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media screen and (max-width: 890px) {
      align-items: flex-start;
      justify-content: flex-start;
    }
    div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
      @media screen and (max-width: 890px) {
        gap: 1rem;
      }
    }
    svg {
      font-size: 100px;
      border: 2px solid ${({ theme }) => theme.bgBlue};
      border-radius: 50%;
      padding: 1rem;
      @media screen and (max-width: 890px) {
        font-size: 90px;
      }
    }
  }
  button {
    background-color: ${({ theme }) => theme.bgRed};
    border: none;
    padding: 0.6rem;
    border-radius: 0.3rem;
    width: 40%;
    color: ${({ theme }) => theme.gray2};
    cursor: pointer;
    @media screen and (max-width: 890px) {
      width: max-content;
    }
  }
`


export default Withdraw
