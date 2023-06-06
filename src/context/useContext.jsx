import { createContext, useState } from "react";

// --------------------------------------------------------------------

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // SCROLL Y
  const [scrollY, setScrollY] = useState(0);

  window.onscroll = () => {
    setScrollY(window.scrollY);
  };

  // CUSTOM SETTINGS
  const [showCustomSet, setShowCustomSet] = useState(false);

  return (
    <DataContext.Provider
      value={{
        scrollY,
        showCustomSet,
        setShowCustomSet,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
