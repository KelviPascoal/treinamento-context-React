import { ReactNode, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

interface ICanalContext {
    canal: number;
    setCanal: React.Dispatch<React.SetStateAction<number>>;
}

interface ICanalProviderProps {
    children: ReactNode;
} 


export const CanalContext = createContext<ICanalContext>({} as ICanalContext);

export function CanalProvider({children}: ICanalProviderProps) {
    const [ canal, setCanal ] = useState(0)

  return (
  <CanalContext.Provider value={{canal, setCanal}}>
      {children}
  </CanalContext.Provider>)
}

export function useCanal() {
    const context = useContext(CanalContext);
    return context;
}
