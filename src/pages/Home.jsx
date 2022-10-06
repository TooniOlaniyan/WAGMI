import React from 'react'
import styled from 'styled-components'
import ChooseUs from '../components/ChooseUs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'

function Home() {
  return (
    <Main>
        <Header/>
        <Hero/>
        <ChooseUs/>
        <HowItWorks/>
        <Pricing/>
        <Reviews/>

    </Main>
  )
}

const Main = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;

    
`

export default Home