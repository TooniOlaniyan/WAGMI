import React , {useState} from 'react'
import DashboardSideBar from '../components/DashboardSideBar'
import DashboardNav from '../components/DashboardNav'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import UpdateProfile from '../components/UpdateProfile'
import UpdatePassword from '../components/UpdatePassword'

function Settings() {
  const [isActive, setIsActive] = useState('profile')
  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content>
          <Setting>
            <div
              onClick={() => setIsActive('profile')}
              className={isActive ==='profile' ? 'settingOptions': 'notActive'}
            >
              <p>Profile Setting</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div
              onClick={() => setIsActive('security')}
                className={isActive ==='profile' ? 'settingOptions': 'notActive'}
            >
              <p>Security Setting</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div   className={isActive ==='profile' ? 'settingOptions': 'notActive'}>
              <p>Live Chat</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
          </Setting>
          <BottomContainer>
            {isActive === 'profile' && <UpdateProfile />}
            {isActive === 'security' && <UpdatePassword />}
          </BottomContainer>
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
  height: 87vh;
  overflow-y: scroll;
  align-items: center;
  @media screen and (max-width: 640px) {
    height: 100vh;
    padding: 0.5rem;
    /* align-items: flex-start; */
  }
`
  const Setting = styled.div`
    background-color: ${({ theme }) => theme.gray2};
    padding: 4rem;
    height: 60vh;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-direction: column;
    transition: all 0.5s;
    width: 100%;
    @media screen and (max-width: 640px) {
      padding: 2rem;
    }

    .settingOptions {
      display: flex;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.bgRed};
      width: 70%;
      padding: 1.2rem 2rem;
      justify-content: space-between;
      border-radius: 1.2rem;
      cursor: pointer;
      @media screen and (max-width: 640px) {
        width: 100%;
        padding: 1.2rem 1rem;
      }

      p {
        font-weight: 900;
        color: ${({ theme }) => theme.text1};
        font-size: 18px;
      }
      .icons {
        color: ${({ theme }) => theme.text1};
        font-size: 20px;
        border: 2px solid ${({ theme }) => theme.text1};
        border-radius: 0.5rem;
      }
    }
    .notActive {
      display: flex;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.bgBlue};
      width: 70%;
      padding: 1.2rem 2rem;
      justify-content: space-between;
      border-radius: 1.2rem;
      cursor: pointer;
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.bgRed};
        font-size: 18px;
      }
      .icons {
        color: ${({ theme }) => theme.text1};
        font-size: 20px;
        border: 2px solid ${({ theme }) => theme.text1};
        border-radius: 0.5rem;
      }
    }
  `
  const BottomContainer = styled.div`
    
  `

export default Settings