import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

function Withdrawl({setRequest}) {
  return (
    <Container>
      <Main>
        <Button onClick={() => setRequest(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div className='request'>
          <p>Request Widthdraw</p>
        </div>
        <form>
          <div className='formControl'>
            <input type='text' placeholder='Enter Amount' />
            <label htmlFor=''>Enter Amount to Withdraw</label>
          </div>
          <div className='formControl'>
            <input type='text' placeholder='Enter Address' />
            <label htmlFor=''>Enter wallet address</label>
          </div>
          <div className='withdraw'>
            <button>Withdraw</button>
          </div>
        </form>
      </Main>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.gray2};
  width: 50%;
  height: 50%;
  border-radius: 1.6rem;
  padding: 13rem 3rem;
  gap: 1rem;
  position: relative;
  margin-top: -12rem;
  .request {
    font-size: 18px;
    font-weight: 800;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 3rem;
    @media screen and (max-width: 640px) {
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }
    .formControl {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      flex-direction: column-reverse;
      .editable {
        color: ${({ theme }) => theme.bgBlue};
      }
      label {
        font-size: 15px;
        color: ${({ theme }) => theme.gray};
      }

      input {
        font-size: 17px;
        width: 25vw;
        padding: 0.5rem 1rem;
        border-radius: 1.2rem;
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.bgRed};
        @media screen and (max-width: 640px) {
          width: 100%;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }
      }
      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.bgRed};
      }
    }
    .withdraw {
      height: 4rem;
      display: flex;
      align-items: flex-end;
      button {
        width: 100%;
        padding: 0.5rem 2rem;
        border: none;
        font-size: 17px;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.bgBlue};
        color: ${({ theme }) => theme.text2};
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
  }
`
 const Button = styled.div`
   position: absolute;
   top: 1.4rem;
   right: 2rem;
   border: 3px solid ${({ theme }) => theme.bgRed};
   padding: 0.4rem;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   .icon {
     color: ${({ theme }) => theme.text1};
     font-size: 15px;
   }
 `

export default Withdrawl