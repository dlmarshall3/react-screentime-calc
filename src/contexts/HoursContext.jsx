import { createContext, useContext, useState } from "react";

const HoursContext = createContext();

export default function HoursStorage({ children }) {
  const [perDayHours, setHoursPerDay] = useState(0);
  
  return (
    <HoursContext.Provider
      value={{ perDayHours, setHoursPerDay }}
    >
      {children}
    </HoursContext.Provider>
  );
}

export function useHoursContext() {
  return useContext(HoursContext);
}
