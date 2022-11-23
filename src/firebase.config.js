
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDQOMVL80CDGOKre9V5ZXV11DphNIfJWbI',
  authDomain: 'traderepublic-e8675.firebaseapp.com',
  projectId: 'traderepublic-e8675',
  storageBucket: 'traderepublic-e8675.appspot.com',
  messagingSenderId: '920929686625',
  appId: '1:920929686625:web:b3c9e8084c3eb15b160620',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const db = getFirestore()
