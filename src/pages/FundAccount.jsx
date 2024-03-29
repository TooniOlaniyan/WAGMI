import React, { useState } from 'react'
import DashboardSideBar from '../components/DashboardSideBar'
import DashboardNav from '../components/DashboardNav'
import styled from 'styled-components'
import {FiCopy} from 'react-icons/fi'
import TransactionHistory from '../components/TransactionHistory'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import {toast} from 'react-toastify'
import ProofOfPayment from '../components/modals/ProofOfPayment'
function FundAccount() {
  const [proof, setProof] = useState(false)

  const handleCopy = () => {
    
    const walletAddress = 'bc1qp34fhexpyfvu74vu906asplm5q0kaqeucsr6lz'
    const data = navigator.clipboard.writeText(walletAddress)
    toast.success('Address copied')
  }
  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content>
          <div className='fund'>
            <p>Fund Account</p>
          </div>
          <div className='text'>
            <p>Copy BTC address below to make deposit</p>
          </div>
          <div className='walletContainer'>
            <input
              type='text'
              placeholder='bc1qp34fhexpyfvu74vu906asplm5q0kaqeucsr6lz'
              disabled
            />
            <FiCopy onClick={handleCopy} />
          </div>
          <div className='note'>
            <p>
              Please note that the company is not responsible for the loss of
              your funds if you send another cryptocurrency to this address that
              is selected for you.
            </p>
          </div>
          <div onClick={() => setProof(true)} className='proof'>
            <p>Proof of payment</p>
          </div>
          {proof && <ProofOfPayment setProof={setProof} />}
          <TransactionTable>
            <div className='history'>
              <p>See Transaction History</p>
            </div>
            <TransactionHistory />
          </TransactionTable>
          <div className='getMore'>
            <Link to='/transactions'>
              <p>
                Get More <FaArrowRight />
              </p>
            </Link>
          </div>
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
  @media screen and (max-width: 640px) {
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
  .note {
    p {
      font-size: 16px;
      @media screen and (max-width: 890px) {
        font-size: 15px;
      }
    }
  }
  .text {
    p {
      font-size: 15px;
      font-weight: 800;
      color: ${({ theme }) => theme.gray};
    }
  }
  .walletContainer {
    width: 75%;
    border: 3px solid ${({ theme }) => theme.bgBlue};
    background-color: ${({ theme }) => theme.bgBlue};
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 640px) {
      width: 98%;
    }
    input {
      flex: 12;
      padding: 0.5rem;
      font-size: 20px;
      border-radius: 0.5rem;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.bgBlue};
      &::placeholder {
        color: ${({ theme }) => theme.gray2};
      }
      @media screen and (max-width: 640px) {
        font-size: 13px;
      }
    }
    svg {
      flex: 1;
      font-size: 20px;
      height: 3rem;
      padding: 0.5rem;
      color: ${({ theme }) => theme.gray};
      border: 2px solid ${({ theme }) => theme.bgRed};
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
  .getMore {
    background-color: ${({ theme }) => theme.bgRed};
    padding: 1rem;
    border-radius: 1.3rem;
    display: flex;
    align-self: flex-end;
    a {
      text-decoration: none;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.text2};
    }
  }

  .proof {
    text-align: end;
    cursor: pointer;
    p {
      font-size: 19px;
      color: ${({ theme }) => theme.bgRed};
      font-weight: 600;
    }
  }
`
const TransactionTable = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .history {
    width: fit-content;
    padding: 0.3rem;
    border-radius: 0.2rem;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray};
    border-bottom: 3px solid ${({ theme }) => theme.bgRed};
  }
`


export default FundAccount