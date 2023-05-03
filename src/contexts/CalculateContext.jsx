import { createContext, useContext, useState } from "react";

const CalculateContext = createContext();

export default function CalculateStorage({ children }) {
  const [calculateFlag, setCalculateFlag] = useState(false);
  const [woahFlag, setWoahFlag] = useState(false);

  return (
    <CalculateContext.Provider
      value={{ calculateFlag, setCalculateFlag, woahFlag, setWoahFlag }}
    >
      {children}
    </CalculateContext.Provider>
  );
}

export function useCalculateContext() {
  return useContext(CalculateContext);
}
