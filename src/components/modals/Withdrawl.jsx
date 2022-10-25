import React ,{useState , useEffect , useRef} from 'react'
import styled from 'styled-components'
import {getAuth , onAuthStateChanged} from 'firebase/auth'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {addDoc , collection , serverTimestamp } from 'firebase/firestore'
import {db} from '../../firebase.config'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'

function Withdrawl({setBitcoin}) {
  const [loading , setLoading] = useState(false)
  const [formData , setFormData] = useState({
    amount:'',
    type: 'Withdrawal',
    method:'Btc',
    status:'pending',
    walletAddress:''
  })
  const {amount , walletAddress} = formData
  const auth = getAuth()
  const isMounted = useRef(true)
  const navigate = useNavigate()
  useEffect(() => {
    if(isMounted){
      onAuthStateChanged(auth , (user) => {
        if(user){
          setFormData({...formData , userRef: user.uid})
        }else{
          navigate('/sign-in')
        }
      })

    }

    return() =>{
      isMounted.current = false
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  } , [isMounted])

 


  const handleSubmit = async (e) => {
    e.preventDefault()
     const formDataCopy = {
       ...formData,
       timestamp: serverTimestamp(),
     }
     setLoading(true)
     try {
      const docRef = await addDoc(collection(db , 'transactions') , formDataCopy)
      toast.success('Withdrawal request is beign processed')
      setLoading(false)
      setFormData('')
      
     } catch (error) {
      toast.error('Please try again')
      setLoading(false)
      setFormData('')
      
     }

  }
  const handleChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.id]: e.target.value

    }))

  }

  if(loading){
    return <Spinner/>

  }

  
  return (
    <Container>
      <Main>
        <Button onClick={() => setBitcoin(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div className='request'>
          <p>Request Widthdraw</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='formControl'>
            <input onChange={handleChange} id='amount' required value={amount} type='text' placeholder='Enter Amount' />
            <label htmlFor=''>Enter Amount to Withdraw</label>
          </div>
          <div className='formControl'>
            <input required onChange={handleChange} id='walletAddress' value={walletAddress} type='text' placeholder='Enter Address' />
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
  border-radius: 1.6rem;
  padding: 13rem 3rem;
  gap: 1rem;
  position: relative;
  margin-top: -12rem;
  @media screen and (max-width: 890px) {
    width: 90vw;
  }

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
        border-radius: 0.6rem;
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