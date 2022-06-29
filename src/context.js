import React, { createContext, useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const handeCartModule = () => {
    setCart(!cart);
  };
  const handeKitchenModule = () => {
    setKitchen(!kitchen);
  };
  return (
    <AppContext.Provider
      value={{
        handeCartModule,
        cart,
        setCart,
        handeKitchenModule,
        kitchen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
