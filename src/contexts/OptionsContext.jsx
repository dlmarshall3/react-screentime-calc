import { createContext, useContext, useState } from "react";

const OptionsContext = createContext();

export default function OptionsStorage({ children }) {
  const [basicFlag, setBasicFlag] = useState(false);
  const [advancedFlag, setAdvancedFlag] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  return (
    <OptionsContext.Provider
      value={{ basicFlag, setBasicFlag, advancedFlag, setAdvancedFlag, optionSelected, setOptionSelected }}
    >
      {children}
    </OptionsContext.Provider>
  );
}

export function useOptionsContext() {
  return useContext(OptionsContext);
}
