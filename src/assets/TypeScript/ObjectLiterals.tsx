interface Person {
  fullName: string;
  age: number;
  gender?: string;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

export const ObjectLiterals = () => {

  const person: Person = {
    fullName: 'Pedro',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Springfield',
      country: 'USA'
    }
  }
  return (
    <>
      <h1>ObjectLiterals</h1>
        <pre>
          {JSON.stringify(person,null,2)}
        </pre>
    </>
  )
}
