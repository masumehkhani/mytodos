import { useState } from 'react'
import TODO from './components/TODO'
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  const [ShowModal, setShowModal] = useState(false);
  const addHandler = () => {
    setShowModal(true);
  };
  const deleteHandler = () => {
    console.log("delete");
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="relative">
        <TODO
          title={"My TODO "}
          onAddClick={addHandler}
          onDeleteClick={deleteHandler}
        />
        {ShowModal && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {ShowModal && <Backdrop onClick={closeModalHandler} />}
      </div>
    </>
  );
}

export default App
