import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import styled from 'styled-components'

function SliderContent({name , testimony , src , icon}) {
  return (
    <Main>
      <p>{testimony}</p>
      <div>
        <img src={src} alt='' />
        <div>
          <p>{name}</p>
          <div>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>

          </div>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
  background-color: ${({ theme }) => theme.gray};
`
export default SliderContent