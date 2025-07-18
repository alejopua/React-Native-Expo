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
  isAuthenticated: boolean;

  //Methods
  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}
const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 2000);
  }, []);

  const loginWithEmailAndPassword = (email: string, password: string) => {
    setUser({
      name: "Alejandro Ramirez",
      email: email,
    });

    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);

    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        //Getter
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        //Method
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
