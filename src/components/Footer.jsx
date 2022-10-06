import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Main>
      <Details>
        <p>Trade Rebublic</p>
        <p>
          Trade Republic is a conservative investment platform for elite
          Republicans that provides you with the most necessary features that
          will make your experience better.
        </p>
        <Socials>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>

        </Socials>
      </Details>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        
      </div>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  padding: 3rem 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.gray2};
`
const Details = styled.div`
    
`
const Socials = styled.div`
    
`
export default Footer