import { createContext, type PropsWithChildren, useContext } from "react";

interface AuthState {
  hola: string;
}
const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider
      value={{
        hola: "Mundo",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
