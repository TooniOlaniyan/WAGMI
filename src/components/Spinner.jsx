import React from 'react'
import DotLoader from 'react-spinners/DotLoader'
import styled from 'styled-components'

function Spinner() {
  return (
    <Container>
      <DotLoader color='#9C0000' size={100}  />
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`
export default Spinner