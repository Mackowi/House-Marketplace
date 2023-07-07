// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvvvhjQ5z9HlAR_z-ksuGzqFUJruTHKj8',
  authDomain: 'house-marketplace-app-400ce.firebaseapp.com',
  projectId: 'house-marketplace-app-400ce',
  storageBucket: 'house-marketplace-app-400ce.appspot.com',
  messagingSenderId: '768698100257',
  appId: '1:768698100257:web:b72556e49068bbc0dd5160',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
