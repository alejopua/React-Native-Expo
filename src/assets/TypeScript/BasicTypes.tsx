export const BasicTypes = () => {
  // Info User #1
  const name: string = 'Docelco';
  const age: number = 30;
  const isActive: boolean = true;
  const skills: string[] = ['JavaScript', 'TypeScript', 'React'];

  return (
    <>
      <h1>Basicds Types</h1>
        <p>
          Hello <strong>{name}</strong>, he has <strong>{age}</strong> years old. <br />
          Status: <strong>{isActive ? 'Active' : 'Inactive'}</strong>
          <br />
          Skills: {skills.join(', ')}
        </p>
    </>
  )
}

