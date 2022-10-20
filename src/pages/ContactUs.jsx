import React , {useRef , useState} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import LoadingSpinner from '../components/LoadingSpinner'

function ContactUs() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
     const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        setLoading(true)
        const response = await emailjs.sendForm(
          'service_ysx1ktv',
          'template_4c4d93i',
          formRef.current,
          'FNfMFm5_QR54vP5Da'
        )
        console.log(response)
        if(response.text === 'OK'){
          formRef.current.reset()
           setLoading(false)
           toast.success('Message sent. Our team would respond soon')

        }
       
        
      } catch (error) {
        toast.error('Something went wrong')
        setLoading(false)
        
      }

     }
  return (
    <Main>
      <Header />
      <Contact>
        <h2>Contact us</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <div className='form-control'>
              <input
                required
                name='user_name'
                type='text'
                placeholder='Your Name'
                id='name'
              />
              <input
                required
                name='user_email'
                type='email'
                placeholder='Email Address'
              />
            </div>
            <div className='form-control subject'>
              <input
                required
                name='user_subject'
                type='text'
                placeholder='Subject'
                id='subject'
              />
            </div>
            <div className='form-control text'>
              <textarea
                name='message'
                id='message'
                placeholder='Send us a message'
                required
              ></textarea>
            </div>
            <button>Submit {loading && <LoadingSpinner />} </button>
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
    cursor: pointer;
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