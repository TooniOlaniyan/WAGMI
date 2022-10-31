import React from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardSideBar from '../components/DashboardSideBar'
import styled from 'styled-components'
import TransactionPageHistory from '../components/TransactionPageHistory'


function Transactions() {
  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content>
         <TransactionPageHistory/>
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
   padding: 0.5rem;
  }
`

export default Transactions