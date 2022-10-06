import React from 'react'
import styled from 'styled-components'
import ChooseUs from '../components/ChooseUs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'

function Home() {
  return (
    <Main>
        <Header/>
        <Hero/>
        <ChooseUs/>
        <HowItWorks/>
        <Pricing/>

    </Main>
  )
}

const Main = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;

    
`

export default Home