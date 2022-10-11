import React from 'react'
import DashboardSideBar from '../components/DashboardSideBar'
import DashboardNav from '../components/DashboardNav'
import styled from 'styled-components'
import {FiCopy} from 'react-icons/fi'
function FundAccount() {
  const handleCopy = () => {
    const walletAddress = 'bc1qh2ntfz4g7whl5chys0j94xv82du47mfh580y03'
    const data = navigator.clipboard.writeText(walletAddress)
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
            <p>Copy address below to make deposit</p>
          </div>
          <div className='walletContainer'>
            <input
              type='text'
              placeholder='bc1qh2ntfz4g7whl5chys0j94xv82du47mfh580y03'
              disabled
            />
            <FiCopy onClick={handleCopy} />
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
`

export default FundAccount