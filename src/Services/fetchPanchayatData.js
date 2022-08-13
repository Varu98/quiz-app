import { getDocs } from 'firebase/firestore';
import { panchayatCollectionRef } from '../firebase-config';
import { GET_PANCHAYAT_DATA } from '../Reducers/Constants';

export const getPanchayatData = async (navigate, dataDispatch) => {
  try {
    const data = await getDocs(panchayatCollectionRef, 'panchayat').then(
      response =>
        response.docs.map(item => {
          return { ...item.data(), id: item.id };
        })
    );
    dataDispatch({ type: GET_PANCHAYAT_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};
