import React, { useState } from 'react'
import DashboardSideBar from '../components/DashboardSideBar'
import DashboardNav from '../components/DashboardNav'
import styled from 'styled-components'
import DashboardPricing from '../components/DashboardPricing'
import { Link } from 'react-router-dom'

function Invest() {

  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content>
          <DashboardPricing/>
          {/* <ExternalLinks>
            <Link to='/'>Trade Republic</Link>
            <p>|</p>
            <Link to='/contact-us'>Contact Us</Link>
          </ExternalLinks> */}
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
  @media screen and (max-width: 890px) {
    height: 100vh;
    width: 100vw;
    padding: 0.5rem;
    
  }
`

    const ExternalLinks = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
        color: ${({ theme }) => theme.gray};
      }
    `
export default Invest