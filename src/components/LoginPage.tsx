import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {
    isChecking,
    isAuthenticated,
    loginWithEmailAndPassword,
    user,
    logout,
  } = useAuthContext();

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Welcome</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={() => logout()}
            className="bg-blue-500 p-2 rounded-xl mt-2 text-white"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Hello</h3>
          <button
            onClick={() => loginWithEmailAndPassword("alejo@gmail.com", "123")}
            className="bg-blue-500 p-2 rounded-xl mt-2 text-white"
          >
            Login
          </button>
        </>
      )}
    </>
  );
};
