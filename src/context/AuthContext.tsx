import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "unauthenticated" = "unauthenticated",
}
interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
}

interface User {
  UserName: string;
  email: string;
}
const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 2000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status: status,
        isChecking: status === AuthStatus.checking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
