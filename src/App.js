import React, { Fragment, useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <Fragment>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button onClick={() => setShow(true)} className="btn-openModal">
        Open Model
      </button>
      <Modal show={show} close={closeModalHandler} />
    </Fragment>
  );
}

export default App;
