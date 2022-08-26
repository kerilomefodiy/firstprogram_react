import React, { useState, useContext } from "react";
import ModalButton from "../Button/ModalButton";
import { ModalWindowCotext } from "../ModalWindow/context";
import { SoundContext } from "../MainPart/context";

export default function Navbar() {
  // викликаю змінну і функцію через юзконтекст
  const { modal, setModal } = useContext(ModalWindowCotext);
  const openModal = () => {
    setModal(true);
  };
  // викликаю змінну і функцію через юзконтекст
  const { sound, setSound } = useContext(SoundContext);
  const onoffSound = () => {
    if (sound === false) {
      setSound(true);
    }
    if (sound === true) {
      setSound(false);
    }
  };

  return (
    <div className="navbar">
      <a href="https://youtu.be/XC4qz-lxPbw?t=1" target="_blank" className="soundcloud">
        Soundtrack для комфортного натикання
      </a>
      <ModalButton onClick={onoffSound} sound={sound}>
        Звук
      </ModalButton>
      <ModalButton onClick={openModal} sound={true}>
        Інфо
      </ModalButton>
    </div>
  );
}
