import { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [idDevice, setIdDevice] = useState();
  const value = {
    idDevice,
    setIdDevice,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
