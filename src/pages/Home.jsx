import React from 'react'
import styled from 'styled-components'
import ChooseUs from '../components/ChooseUs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'

function Home() {
  return (
    <Main>
        <Header/>
        <Hero/>
        <ChooseUs/>
        <HowItWorks/>

    </Main>
  )
}

const Main = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;

    
`

export default Home