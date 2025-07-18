import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated } = useAuthContext();

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Welcome</h3>
          <button className="bg-blue-500 p-2 rounded-xl mt-2 text-white">
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Hello</h3>
          <button className="bg-blue-500 p-2 rounded-xl mt-2 text-white">
            Login
          </button>
        </>
      )}
    </>
  );
};
