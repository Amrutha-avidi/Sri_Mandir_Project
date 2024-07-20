import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const  AuthProvider  = ({ children }) =>{
  const [currentUser, setCurrentUser] = useState(null);

  const login = (phoneNumber) => {
    // Normally, you would validate the phone number against a server or other method
    // For simplicity, just set a dummy user here
    setCurrentUser({ phoneNumber });
  };

 

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
