import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking } = useAuthContext();

  if (isChecking) {
    return <h3>Checking User...</h3>;
  } else {
    return <h3>Verified user</h3>;
  }
};
