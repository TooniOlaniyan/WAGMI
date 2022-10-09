import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import ChooseUs from '../components/ChooseUs'
import HowItWorks from '../components/HowItWorks'
import WhoWeAre from '../components/WhoWeAre'

function AboutUs() {
  return (
    <Main>
      <Header />
      <WhoWeAre/>
      <HowItWorks/>
      <Footer/>

    </Main>
  )
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default AboutUs