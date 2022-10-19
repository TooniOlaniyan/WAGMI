import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ContactUs() {
     const onSubmit = (e) => {
      e.preventDefault()

     }
  return (
    <Main>
      <Header />
      <Contact>
        <h2>Contact us</h2>
        <Form>
          <form onSubmit={onSubmit}>
            <div className='form-control'>
              <input type='text' placeholder='Your Name' id='name' />
              <input type='email' placeholder='Email Address' id='email' />
            </div>
            <div className='form-control subject'>
                <input type="text" placeholder='Subject' id='subject' />
            </div>
            <div className='form-control text'>
              <textarea
                name=''
                id='message'
                placeholder='Send us a message'
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </Form>
      </Contact>
      <Footer />
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem;
  gap: 2rem;
  flex-direction: column;
`
const Form = styled.form`
  width: 70%;
  @media screen and (max-width: 890px) {
    width: 90vw;
  }
  .form-control {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 890px) {
      flex-direction: column;
    }
  }
  button {
    padding: 0.5rem 3rem;
    font-size: 18px;
    border: none;
    background-color: ${({ theme }) => theme.bgRed};
    color: ${({ theme }) => theme.gray2};
  }
  .subject {
    input {
      width: 100%;
    }
    width: 100%;
  }
  input,
  textarea {
    color: ${({ theme }) => theme.gray};
    font-size: 0.9rem;
    font-family: 'Open Sans', sans-serif;
    padding: 1rem;
    background-color: ${({ theme }) => theme.gray2};
    border: 1px solid ${({ theme }) => theme.gray2};
    border-radius: 8px;
    resize: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.bgRed};
    }
  }

  #name,
  #email {
    width: 50%;
    height: 3.5rem;
    @media screen and (max-width: 890px) {
     width: 100%;
    }
  }

  #message {
    width: 100%;
    height: 14rem;
  }
`
export default ContactUs