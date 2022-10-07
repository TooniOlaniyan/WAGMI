import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ContactUs() {
  return (
    <Main>
        <Header/>
        <Footer/>

    </Main>
  )
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export default ContactUs