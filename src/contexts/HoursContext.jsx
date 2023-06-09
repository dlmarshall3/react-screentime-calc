import { createContext, useContext, useState } from "react";

const HoursContext = createContext();

export default function HoursStorage({ children }) {
  const [hours, setHours] = useState(0);
  
  return (
    <HoursContext.Provider
      value={{ hours, setHours }}
    >
      {children}
    </HoursContext.Provider>
  );
}

export function useHoursContext() {
  return useContext(HoursContext);
}
