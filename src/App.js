import React, { useState, useContext } from "react";
import ModalWindow from "./Components/UI/ModalWindow/ModalWindow";
import Navbar from "./Components/UI/Navbar/Navbar";
import { ModalWindowCotext } from "./Components/UI/ModalWindow/context";
import { SoundContext } from "./Components/UI/MainPart/context";

import "./Styles/App.css";
import MainPart from "./Components/UI/MainPart/MainPart";

function App() {
  //створюю стан для показування чи закривання модального вікна
  const [modal, setModal] = useState(false);
  const [sound, setSound] = useState(false);

  return (
    <div className="App">
      <ModalWindowCotext.Provider value={{ modal, setModal }}>
        <SoundContext.Provider value={{ sound, setSound }}>
          <Navbar className="navbar" />
          <MainPart />
          <ModalWindow vidimost={modal} setVidimost={setModal} />
        </SoundContext.Provider>
      </ModalWindowCotext.Provider>
    </div>
  );
}

export default App;
