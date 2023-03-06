import { createContext, useEffect, useState } from "react";
import { USER } from "../components/constants/auth";
import { FirebaseAuth } from "../firebase/config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ authenticated: false, id: "" });

  useEffect(() => {
    setUser(
      localStorage[USER]
        ? JSON.parse(localStorage[USER])
        : { authenticated: false, id: "" }
    );
  }, []);

  const closeSession = async () => {
    await FirebaseAuth.signOut();
    localStorage.removeItem(USER);
    setUser({ authenticated: false, id: "" });
  };

  const openSession = (id) => {
    localStorage.setItem(USER, JSON.stringify({ authenticated: true, id }));
    setUser({ authenticated: true, id });
  };

  return (
    <AuthContext.Provider value={{ closeSession, openSession, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
