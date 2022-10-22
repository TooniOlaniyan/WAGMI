import React from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardSideBar from '../components/DashboardSideBar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import {
  getDocs,
  collection,
  query,
  where,
  startAfter,
  orderBy,
  limit,
} from 'firebase/firestore'
import {db} from '../firebase.config'
function Transactions() {
   const [transactions, setTransactions] = useState(null)

     useEffect(() => {
       const fetchTrasaction = async () => {
         try {
           const transactionRef = collection(db, 'transactions')
           const q = query(
             transactionRef,
             orderBy('timestamp', 'desc'),
             limit(2)
           )

           const querySnap = await getDocs(q)
           let transaction = []

           querySnap.forEach((doc) => {
             console.log(doc.data())
           })
         } catch (error) {}
       }

       fetchTrasaction()
     })
  return (
    <Main>
      <DashboardSideBar />
      <MainContainer>
        <DashboardNav />
        <Content></Content>
      </MainContainer>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
`
const MainContainer = styled.div`
  display: flex;
  flex: 4.5;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s;
  @media screen and (max-width: 640px) {
    /* background-color: red; */
    /* overflow: hidden; */
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.1rem 6rem 3rem 6rem;
  height: 83vh;
  overflow-y: scroll;
`

export default Transactions