import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBDdUD-soRYYuQIgk4CePiKXp0gcuAUOYw',
  authDomain: 'cy-portfolio-vue.firebaseapp.com',
  projectId: 'cy-portfolio-vue',
  storageBucket: 'cy-portfolio-vue.appspot.com',
  messagingSenderId: '720817890663',
  appId: '1:720817890663:web:0f4a023941604fba997bc2'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export{
    db
}