import React, { useState} from 'react'
import styled from 'styled-components'
import {
  updateDoc,
  getDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from 'firebase/firestore'
import { getAuth, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import Spinner from './Spinner'
import { toast } from 'react-toastify'
import { async } from '@firebase/util'

function UpdatePassword() {
  const auth = getAuth()
  const [loading , setLoading] = useState(false)
  const [data, setData] = useState([])
  const [formData , setFormData] = useState({
    pin:'',
    confirmPin:''
  })
  const {pin , confirmPin} = formData



  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value

    }))
}

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
        const userRef = doc(db , 'users' , auth.currentUser.uid)
        await updateDoc(userRef , {
          pin,
          confirmPin
        })
        toast.success('Pin set Successful')
        setLoading(false)

      
    } catch (error) {
      toast.error('Something went wrong, try again')
      
    }

  }

  if(loading){
    return (
      <Spinner/>
    )
  }
  return (
    <Edit>
      <div className='edit'>
        <p>Set Pin</p>
      </div>
      <form onSubmit={handleUpdate} > 
        <div className='formControl'>
          <input id='pin' value={pin}  onChange={handleChange} type='password' />
          <label htmlFor=''>Enter 4 digit Pin</label>
        </div>
        <div className='formControl'>
          <input id='confirmPin' value={confirmPin} onChange={handleChange} type='password' />
          <label htmlFor=''>Confirm Pin</label>
        </div>
        <div className='update'>
          <button>Create Pin </button>
        </div>
      </form>
    </Edit>
  )
}
const Edit = styled.div`
  background-color: ${({ theme }) => theme.gray2};
  padding: 4rem;
  height: 80vh;
  border-radius: 0.6rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  flex-direction: column;
  transition: all 0.5s;
  width: 67vw;
  @media screen and (max-width: 890px) {
    width: 97vw;
    height: 70vh;
    padding: 2rem;
  }
  .edit {
    P {
      font-size: 20px;
      font-weight: 700;
      color: ${({ theme }) => theme.text1};
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5rem;
    @media screen and (max-width: 890px) {
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
      flex-direction: column;
      .editable {
        color: ${({ theme }) => theme.bgBlue};
      }
      label {
        font-size: 15px;
        color: ${({ theme }) => theme.gray};
      }

      input {
        font-size: 18px;
        width: 25vw;
        padding: 1rem 2rem;
        border-radius: 1.2rem;
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.bgRed};
        @media screen and (max-width: 890px) {
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
    .update {
      height: 4rem;
      display: flex;
      align-items: flex-end;
      button {
        width: 100%;
        padding: 0.8rem 2rem;
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

export default UpdatePassword