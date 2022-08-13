// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import { panchayat } from './backend/panchayat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCoJxY9SisGWRkYe0qef8I3KHgHI39mU5g',
  authDomain: 'quiz-8d972.firebaseapp.com',
  projectId: 'quiz-8d972',
  storageBucket: 'quiz-8d972.appspot.com',
  messagingSenderId: '474665943109',
  appId: '1:474665943109:web:6a8b65fa19612c8c12e32c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const panchayatCollectionRef = collection(database, 'panchayat');
export const gotCollectionRef = collection(database, 'got');

export const sendData = async () => {
  try {
    await addDoc(gotCollectionRef, { ...panchayat });
    console.log('added');
  } catch (error) {
    console.log(error);
  }
};

// export const getData = async () => {
//   try {
//     const res = await getDocs(collectionRef).then(response =>
//       console.log(
//         response.docs.map(item => {
//           return { ...item.data(), id: item.id };
//         })
//       )
//     );
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
