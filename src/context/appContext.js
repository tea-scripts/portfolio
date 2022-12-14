import React, { useState, useContext } from 'react';

const initialState = {
  isSidebarOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const openSidebar = () => {
    setState({ ...state, isSidebarOpen: true });
  };

  const closeSidebar = () => {
    setState({ ...state, isSidebarOpen: false });
  };

  return (
    <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
