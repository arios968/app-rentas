import { createContext, useEffect, useState } from "react";
import { USER } from "../constants/auth";
import { FirebaseAuth } from "../firebase/config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ authenticated: false, id: "" });
  const [session, setSession] = useState(false);

  useEffect(() => {
    const user = localStorage[USER]
      ? JSON.parse(localStorage[USER])
      : { authenticated: false, id: "" };
    setUser(user);
    setSession(!!user.id);
  }, []);

  const closeSession = async () => {
    await FirebaseAuth.signOut();
    localStorage.removeItem(USER);
    setUser({ authenticated: false, id: "" });
    setSession(false);
  };

  const openSession = (id) => {
    localStorage.setItem(USER, JSON.stringify({ authenticated: true, id }));
    setUser({ authenticated: true, id });
    setSession(true);
  };

  return (
    <AuthContext.Provider value={{ closeSession, openSession, user, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
