// import { BasicTypes } from './assets/TypeScript/BasicTypes'
// import { ObjectLiterals } from './assets/TypeScript/ObjectLiterals'
// import { BasicFunctions } from './assets/TypeScript/BasicFunctions';

// import { Counter } from "./components/Counter";
// import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { UserPage } from "./components/UserPage";

export const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl font-bold m-5">Hello world!</h1>

        {/* <BasicTypes /> */}
        {/* <ObjectLiterals */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        <UserPage />
      </div>
    </AuthProvider>
  );
};
