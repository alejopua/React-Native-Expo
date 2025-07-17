

// import { BasicTypes } from './assets/TypeScript/BasicTypes'
// import { ObjectLiterals } from './assets/TypeScript/ObjectLiterals'
// import { BasicFunctions } from './assets/TypeScript/BasicFunctions';

import { Counter } from "./components/Counter"

export const App = () => {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh'>
          <h1 className="text-4xl font-bold m-5">
            Hello world!
          </h1>

          {/* <BasicTypes /> */}
          {/* <ObjectLiterals */}
          {/* <BasicFunctions /> */}
          <Counter />
      </div>

    </>
  )
}

