
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC219CHQno19GZTnHR7BS21kb1HKxHRzoQ',
  authDomain: 'traderepublican-3d1ba.firebaseapp.com',
  projectId: 'traderepublican-3d1ba',
  storageBucket: 'traderepublican-3d1ba.appspot.com',
  messagingSenderId: '599939648431',
  appId: '1:599939648431:web:5387a9c5923b13a2c53d5a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const db = getFirestore()
