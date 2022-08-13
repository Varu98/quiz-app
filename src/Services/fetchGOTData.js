import { getDocs } from 'firebase/firestore';
import { gotCollectionRef } from '../firebase-config';
import { GET_GOT_DATA } from '../Reducers/Constants';

export const getGOTData = async (navigate, dataDispatch) => {
  try {
    const data = await getDocs(gotCollectionRef, 'got').then(response =>
      response.docs.map(item => {
        return { ...item.data(), id: item.id };
      })
    );
    dataDispatch({ type: GET_GOT_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};
