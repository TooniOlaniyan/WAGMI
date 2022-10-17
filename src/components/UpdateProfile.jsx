import React from 'react'
import styled from 'styled-components'
import { getAuth, updateProfile } from 'firebase/auth'

function UpdateProfile() {
    const auth = getAuth()
  return (
    <Edit>
        <div className='edit'>
            <p>Update Profile</p>
        </div>
        <form>
            <div className='formControl' >
                <input id='name' disabled type="text" placeholder={auth.currentUser.name} />
                <label htmlFor="">Name</label>
            </div>
            <div className='formControl' >
                <input disabled type="email" placeholder={auth.currentUser.email} />
                <label htmlFor="">Email</label>
            </div>
            <div className='formControl' >
                <input    type="number" placeholder={auth.currentUser.number} />
                <label className='editable'  htmlFor="">Phone Number</label>
            </div>
            <div className='formControl' >
                <input   type="text" placeholder='Caleb' />
                <label className='editable' htmlFor="">{auth.currentUser.username}</label>
            </div>
            <div className='formControl' >
                <input  type="text" placeholder='Caleb' />
                <label className='editable'  htmlFor="">Name</label>
            </div>
            <div className='update'>
                <button>Update</button>
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
    height: 90vh;
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
export default UpdateProfile