import { iData } from "@/pages/api";
import { api } from "@/services";
import { createContext, useContext, useEffect, useState } from "react";

interface DataProviderProps {
  children: React.ReactNode
}

const DataContext = createContext<iData>({} as iData);

const DataProvider = ({children}: DataProviderProps) => {
  const [data, setData] = useState<iData>({} as iData);

  useEffect(() => {
    api.get<iData>("/api")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  })

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

const useDataContext = () => useContext(DataContext);

export {
  DataProvider,
  useDataContext,
}
