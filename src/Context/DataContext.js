import { createContext, useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataReducer, initialData } from '../Reducers/dataReducer';
import { getGOTData } from '../Services/fetchGOTData';
import { getPanchayatData } from '../Services/fetchPanchayatData';

const dataContext = createContext(null);

const useData = () => useContext(dataContext);

const DataProvider = ({ children }) => {
  const navigate = useNavigate();

  const [dataState, dataDispatch] = useReducer(dataReducer, initialData);

  useEffect(() => {
    (async () => {
      await getGOTData(navigate, dataDispatch);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await getPanchayatData(navigate, dataDispatch);
    })();
  }, []);

  return (
    <dataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export { useData, DataProvider };
