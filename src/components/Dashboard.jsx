import React  , {useState} from 'react'
import styled from 'styled-components'
import { getAuth } from 'firebase/auth'
import DashboardNav from './DashboardNav'
import DashboardSideBar from './DashboardSideBar'
import { Link } from 'react-router-dom'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {RiLuggageDepositLine} from 'react-icons/ri'
import TradingViewChart from './TradingViewChart'
import Spinner from '../components/Spinner'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import {db} from '../firebase.config'

function Dashboard() {
  const auth = getAuth()
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
       setData(docSnap.data())
       setLoading(false)
       
      } else {
  // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    }
    fetchData()

  },[auth.currentUser.uid])
  
  if(loading){
    return (
      <Spinner/>
    )
  }
  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content>
          <div className='dashboard'>
            <p>Dashboard</p>
          </div>
          <Top>
            <div className='cardOne'>
              <div className='amount'>
                <p className='balance'>Deposit wallet Balance</p>
                <p className='value'>$ {data.deposit}</p>
              </div>
              <div className='icon'>
                <MdOutlineAccountBalanceWallet />
              </div>
            </div>
            <div className='cardTwo'>
              <div className='amount'>
                <p className='balance'>Total Profit Balance</p>
                <p className='value'>$ {data.profit}</p>
              </div>
              <div className='icon'>
                <RiLuggageDepositLine />
              </div>
            </div>
            <div className='cardThree'>
              <div className='amount'>
                <p className='balance'>Total withdraw Balance</p>
                <p className='value'>$ {data.withdraw}</p>
              </div>
              <div className='icon'>
                <RiLuggageDepositLine />
              </div>
            </div>
          </Top>
          <Chart>
            <div className='liveData'>
              <p>Keep up to date with price :</p>
            </div>
            <TradingViewChart />
          </Chart>
      
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
  @media screen and (max-width: 890px) {
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
  margin-top: 2rem;
  @media screen and (max-width: 890px) {
    height: 100vh;
    padding: 0.5rem;
  }
  .dashboard {
    p {
      font-size: 30px;
      font-weight: 700;
      color: ${({ theme }) => theme.bgBlue};
    }
  }
`

  const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.7rem;
    @media screen and (max-width: 890px) {
      flex-direction: column;
      align-items: center;
    }
    .cardOne {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 1rem;
      padding: 2rem 3rem;
      width: 18rem;
      background-color: ${({ theme }) => theme.bgBlue};
      position: relative;
      @media screen and (max-width: 890px) {
        width: 90vw;
      }
      .amount {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .balance {
          font-size: 21px;
          font-weight: 500;
          color: ${({ theme }) => theme.gray2};
        }
        .value {
          font-size: 20px;
          color: ${({ theme }) => theme.text2};
        }
      }
      .icon {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        border: 2px solid ${({ theme }) => theme.bgRed};
        border-radius: 50%;
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 35px;
          color: ${({ theme }) => theme.gray2};
        }
      }
    }
    .cardTwo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 1rem;
      padding: 2rem 3rem;
      width: 18rem;
      background-color: ${({ theme }) => theme.gray};
      position: relative;
      @media screen and (max-width: 890px) {
        width: 90vw;
      }
      .amount {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .balance {
          font-size: 21px;
          font-weight: 500;
          color: ${({ theme }) => theme.gray2};
        }
        .value {
          font-size: 20px;
          color: ${({ theme }) => theme.text2};
        }
      }
      .icon {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        border: 2px solid ${({ theme }) => theme.gray2};
        border-radius: 50%;
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 35px;
          color: ${({ theme }) => theme.gray2};
        }
      }
    }
    .cardThree {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 1rem;
      padding: 2rem 3rem;
      width: 18rem;
      background-color: ${({ theme }) => theme.bgRed};
      position: relative;
      @media screen and (max-width: 890px) {
        width: 90vw;
      }
      .amount {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .balance {
          font-size: 21px;
          font-weight: 500;
          color: ${({ theme }) => theme.text2};
        }
        .value {
          font-size: 20px;
          color: ${({ theme }) => theme.text2};
        }
      }
      .icon {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        border: 2px solid ${({ theme }) => theme.bgBlue};
        border-radius: 50%;
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 35px;
          color: ${({ theme }) => theme.gray2};
        }
      }
    }
  `
  const Chart = styled.div`
    width: 100%;
    height: 150rem;
    /* background-color: red; */
    margin-top: 3rem;
    @media screen and (max-width: 890px) {
      height: 610px;
    }
    .liveData {
      margin-bottom: 2rem;
      p {
        font-size: 21px;
        font-weight: 900;
        color: ${({ theme }) => theme.bgRed};
      }
    }
  `
    const ExternalLinks = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media screen and (max-width: 890px) {
        margin-top: 6rem;
      }
      a {
        color: ${({ theme }) => theme.gray};
      }
    `

export default Dashboard