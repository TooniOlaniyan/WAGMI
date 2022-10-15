import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

function Diamond({ setDiamond }) {
  return (
    <Container>
      <Main>
        <Button onClick={() => setDiamond(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div className='diamond'>
          <p>Invest in Diamond</p>
        </div>
        <div className='minMax'>
          <p>
            <AiOutlineCheck /> Min. deposit: $100,000
          </p>
          <p>
            <AiOutlineCheck /> Max. deposit: $Max
          </p>
        </div>
        <form>
          <div className='formControl'>
            <label htmlFor=''>Select wallet</label>
            <select name='' id=''>
              <option value=''>Deposit wallet</option>
              <option value=''>Profit wallet</option>
            </select>
          </div>
          <div className='formControl'>
            <label htmlFor=''>Invest Amount*</label>
            <input type='number' />
          </div>
          <button>Invest</button>
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
  border-radius: 1rem;
  padding: 13rem 3rem;
  gap: 1rem;
  position: relative;
  margin-top: -12rem;
  @media screen and (max-width: 450px) {
    width: 90vw;
  }

  .diamond {
    font-size: 18px;
    font-weight: 800;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    width: 30vw;

    padding: 0.5rem 1rem;
    @media screen and (max-width: 450px) {
      width: 70vw;
    }
  }
  .minMax {
    font-weight: 700;
    color: ${({ theme }) => theme.text1};
  }
  button {
    width: 50%;
    padding: 0.5rem;
    border: none;
    font-size: 20px;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.text2};
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .formControl {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
    position: relative;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    label {
      color: ${({ theme }) => theme.bgRed};
    }
    input,
    select {
      font-size: 17px;
      width: 100%;
      padding: 0.5rem;
      border: 2px solid ${({ theme }) => theme.gray};
      background-color: transparent;
      border-radius: 0.5rem;
      @media screen and (max-width: 450px) {
       font-size: 15px; 
      }

      &:focus {
        outline: none;
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

export default Diamond
