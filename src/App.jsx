import { useState } from 'react'
import TODO from './components/TODO'


function App() {
  const addHandler = () => {
    console.log("add");
  };
  const deleteHandler = () => {
    console.log("delete");
  };
  return (
    <>
      <TODO
        title={"My TODO "}
        onAddClick={addHandler}
        onDeleteClick={deleteHandler}
      />
    </>
  );
}

export default App
