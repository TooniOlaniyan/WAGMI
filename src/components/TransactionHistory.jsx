import React, { useState , useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import {collection , getDocs , query , where , orderBy , limit , startAfter} from 'firebase/firestore'
import {db} from '../firebase.config'
import {getAuth} from 'firebase/auth'

function TransactionHistory() {
  const [transactions , setTransactions] = useState(null)
  const [loading , setLoading] = useState(false)

  const auth = getAuth()



  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionRef = collection(db , 'transactions')
        const q = query(
          transactionRef,
          where('userRef', '==' , auth.currentUser.uid),
          orderBy('timestamp' , 'desc'),
          limit(5)
        )
        

        const querySnap = await getDocs(q)
        const transaction = []

        querySnap.forEach((doc) => {
          transaction.push({
            id: doc.id,
            data: doc.data()
          })
        console.log(doc.data())
        })

        setTransactions(transaction)
        

        
      } catch (error) {
        console.log('Something is wrong')
      }

    }

    fetchTransactions()


  }, [])
    
const columns = [
  { field: 'date', headerName: 'Date', width: 225, headerClassName: 'header' },
  {
    field: 'type',
    headerName: 'Transaction Type',
    width: 280,
    headerClassName: 'header',
  },
  {
    field: 'method',
    headerName: 'Payment Method',
    width: 280,
    headerClassName: 'header',
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 230,
    headerClassName: 'header',
  },
]

const  [rows , setRows] = useState('')
  return (
      <Main>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          rowsPerPageOptions={[5]}
          className='dataTable'
          re
        />
      </Main>
  )
}

const Main = styled.div`
  height: 50vh;
  width: 100%;
  .dataTable {
    border: 2px solid ${({ theme }) => theme.bgBlue};
    font-size: 18px;
    z-index: -10;
    @media screen and (max-width:890px) {
      width: 95vw;
      
    }
    .header {
      background-color: ${({ theme }) => theme.bgBlue};
      color: ${({ theme }) => theme.text2};
    }
    .MuiTableHead-root {
      border: none;
      outline: none;
    }
  }
`

export default TransactionHistory