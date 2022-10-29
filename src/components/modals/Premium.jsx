import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import Spinner from '../Spinner'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'

function Premium({ setPremium }) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    amount: '',
    method: '',
    status: 'pending',
    type: 'premium',
  })
  const { amount, method } = useState()
  const auth = getAuth()
  const isMounted = useRef(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (isMounted) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate('/sign-in')
        }
      })
     }

    return () => {
      isMounted.current = false
    }
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const formDataCopy = {
        ...formData,
        timestamp: serverTimestamp(),
      }
      setLoading(true)
      if (amount >= 50000 || amount > 99999) {
        try {
          const docRef = await addDoc(
            collection(db, 'investments'),
            formDataCopy
          )
          toast.success('Investment made successfully')
          setLoading(false)
          setFormData('')
        } catch (error) {
          toast.error('Something went wrong, please try again')
          setFormData('')
          setLoading(false)
        }
      } else {
        toast.error('Investment must be more than $50000')
        setLoading(false)
      }
    }

    if (loading) {
      return <Spinner />
    }
  return (
    <Container>
      <Main>
        <Button onClick={() => setPremium(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div className='premium'>
          <p>Invest in Premium</p>
        </div>
        <div className='minMax'>
          <p>
            <AiOutlineCheck /> Min. deposit: $50,000
          </p>
          <p>
            <AiOutlineCheck /> Max. deposit: $99,999
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='formControl'>
            <label htmlFor=''>Select wallet</label>
            <select name='method' id='method'>
              <option value='depositWallet'>Deposit wallet</option>
              <option value='profitWallet'>Profit wallet</option>
            </select>
          </div>
          <div className='formControl'>
            <label htmlFor=''>Invest Amount*</label>
            <input
              onChange={handleChange}
              id='amount'
              value={amount}
              type='number'
            />
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
  background: rgba(0, 0, 0, 0.901);
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
  @media screen and (max-width: 890px) {
    width: 90vw;
  }

  .premium {
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
    @media screen and (max-width: 890px) {
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
    @media screen and (max-width: 890px) {
      width: 90vw;
    }
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
      @media screen and (max-width: 890px) {
        font-size: 15px;
        width: 70%;
       
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

export default Premium
