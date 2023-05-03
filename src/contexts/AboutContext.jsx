import { createContext, useContext, useState } from "react";

const AboutContext = createContext();

export default function AboutStorage({ children }) {
  const [aboutFlag, setAboutFlag] = useState(false);

  return (
    <AboutContext.Provider value={{ aboutFlag, setAboutFlag }}>
      {children}
    </AboutContext.Provider>
  );
}

export function useAboutContext() {
  return useContext(AboutContext);
}
