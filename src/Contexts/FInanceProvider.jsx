import { createContext, useState } from "react";

export const FinanceContext = createContext(null);

export function FinanceProvider({ children }) {
  const [name, setName] = useState(null);

  return (
    <FinanceContext.Provider value={{ name, setName }}>
      {children}
    </FinanceContext.Provider>
  );
}
