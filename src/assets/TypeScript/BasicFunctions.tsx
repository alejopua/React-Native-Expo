const sum = (a: number, b:number): number => {
  return a + b;
}

export const BasicFunctions = () => {
  const x: number = 5;
  const y: number = 10;
  const result = sum(x, y);

  return (
    <>
      <h1>Basic Functions</h1>

      <p>
        The sum of <strong>[{x}]</strong> and <strong>[{y}]</strong> is <strong>[{result}]</strong>.
      </p>
    </>
  )
}
