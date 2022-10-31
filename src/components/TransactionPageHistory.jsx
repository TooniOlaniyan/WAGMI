import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'
import { toast } from 'react-toastify'
import Spinner from './Spinner'
import { FaArrowRight } from 'react-icons/fa'

function TransactionPageHistory() {
   const [transactions, setTransactions] = useState(null)
   const [loading, setLoading] = useState(false)
   const [lastFetchedTransaction , setLastFetchedTransaction] = useState(null)

   const auth = getAuth()
     useEffect(() => {
       const fetchTransactions = async () => {
         try {
           setLoading(true)
           const transactionRef = collection(db, 'transactions')
           const q = query(
             transactionRef,
             where('userRef', '==', auth.currentUser.uid),
             orderBy('timestamp', 'desc'),
             limit(4)
           )

           const querySnap = await getDocs(q)
           const lastVisible = querySnap.docs[querySnap.docs.length - 1]
           setLastFetchedTransaction(lastVisible)
           const transaction = []

           querySnap.forEach((doc) => {
             transaction.push({
               id: doc.id,
               data: doc.data(),
             })
           })

           setTransactions(transaction)
           setLoading(false)
         } catch (error) {
           toast.error('Something is wrong')
           setLoading(false)
         }
       }

       fetchTransactions()
     }, [auth.currentUser.uid])

     const onFetchMore = async () => {
      try {
        setLoading(true)
        const transactionRef = collection(db, 'transactions')
        const q = query(
          transactionRef,
          where('userRef', '==', auth.currentUser.uid),
          orderBy('timestamp', 'desc'),
          startAfter(lastFetchedTransaction),
          limit(10)
        )

        // Execute query
        const querySnap = await getDocs(q)

        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        setLastFetchedTransaction(lastVisible)

        const transaction = []

        querySnap.forEach((doc) => {
          return transaction.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setTransactions((prevState) => [...prevState, ...transaction])
        setLoading(false)
      } catch (error) {
         toast.error('Something is wrong,try again')
         setLoading(false)
        
      }


     }

     if (loading) {
       return <Spinner />
     }

  return (
    <Content>
      <DashboardTableContainer>
        <DashboardTableHead>
          <div>Date | Time</div>
          <div>Amount ($)</div>
          <div>Method</div>
          <div>Type</div>
          <div>Status</div>
        </DashboardTableHead>
        <DashboardTableLine />

        {!transactions && (
          <NoDashboardDataTableBody>
            <p>
              You have no transaction with us <br /> yet. Why?
            </p>
          </NoDashboardDataTableBody>
        )}

        {transactions && transactions.length > 0 && (
          <DashboardTableBody>
            {transactions.map((transact) => (
              <DashboardTableItem key={transact.id}>
                <div className='container'>
                  <p>{transact.data.timestamp.toDate().toDateString()}</p>
                  <p>$ {transact.data.amount}</p>
                  <p>{transact.data.method}</p>
                  <p>{transact.data.type}</p>
                  <p>{transact.data.status}</p>
                </div>
              </DashboardTableItem>
            ))}
          </DashboardTableBody>
        )}
      </DashboardTableContainer>
      <div onClick={onFetchMore} className='getMore'>
          <p>
            Load More <FaArrowRight />
          </p>
      </div>
    </Content>
  )
}
const Content = styled.div`
  .getMore {
    background-color: ${({ theme }) => theme.bgRed};
    padding: 1rem;
    border-radius: 1.3rem;
    display: flex;
    align-self: flex-end;
    width: 10rem;
    cursor: pointer;
    a {
      text-decoration: none;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.text2};
    }
  }
`
const DashboardTableContainer = styled.div`
  height: 100%;
  @media screen and (max-width: 890px) {
    width: 98vw;
    overflow-x: scroll;
  }
`

const DashboardTableHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 890px) {
    width: 900px;
    overflow-x: scroll;
  }

  div {
    display: flex;
    font-weight: 600;
    font-size: 15px;
    line-height: 17px;
    color: #222132;
    padding: 5px 0;

    &:first-child {
      width: 18rem;
      justify-content: center;
      flex: 1;
    }

    &:nth-child(2) {
      width: 14rem;
      flex: 1;
    }

    &:nth-child(3) {
      width: 11rem;
      flex: 1;
    }

    &:nth-child(4) {
      width: 6rem;
      flex: 1;
    }
    &:nth-child(5) {
      width: 7.5rem;
      flex: 1;
    }

    &:last-child {
      width: 5rem;
      flex: 1;
    }
  }
`

const DashboardTableLine = styled.div`
  margin-top: 20px;
  border-bottom: 2px solid #f3f3f3;
`

const NoDashboardDataTableBody = styled.div`
  overflow-y: scroll;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #c6c6c6;
    margin-top: -30px;
  }
`

const DashboardTableBody = styled.div`
  padding-top: 1rem;
  background-color: ${({ theme }) => theme.bgBlue};
  padding: 2rem;
  border-radius: 1rem;
  @media screen and (max-width: 890px) {
    width: 900px;
  }
`
const DashboardTableItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  margin-bottom: 2rem;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      flex: 1;
      color: ${({ theme }) => theme.text2};
      font-weight: 500;
    }
  }
`

export default TransactionPageHistory