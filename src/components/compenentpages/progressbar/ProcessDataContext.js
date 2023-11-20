import { createContext, useContext, useState } from "react";

const ProcessDataContext = createContext({});

export const useProcessDataContext = () => useContext(ProcessDataContext);

const ProcessDataProvider = ({ data, children }) => {
  const [dataObj, setDataObj] = useState(data);

  return (
    <ProcessDataContext.Provider value={{ data: dataObj, setData: setDataObj }}>
      {children}
    </ProcessDataContext.Provider>
  );
};

export default ProcessDataProvider;
