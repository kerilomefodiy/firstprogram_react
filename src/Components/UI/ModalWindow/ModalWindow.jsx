import React from "react";
//імпортую класси цсс шоб використи їх далі в функціях
import cl from "./ModalWindow.module.css";

export default function ({ vidimost, setVidimost }) {
  // механізм який реалізує сривання і показування вікна
  // vidimost === 0, це теж саме що і просто vidimost
  const rootClasses = [cl.modalWindow];
  if (vidimost) {
    rootClasses.push(cl.active); //метод пуш додає обєкт в кінець масива
  }
  return (
    // метод джоін обєднує всі елементи в строку. онклік для того шоб при натисканні на темну область закривалось модальне вікно
    <div className={rootClasses.join(" ")} onClick={() => setVidimost(false)}>
      {/* викликаю метод стоппропагатейшое по кліку в контентній частині для того шоб при натисканні на область модального вікна воно не  закривалось*/}
      <div className={cl.modalWindowContent} onClick={(e) => e.stopPropagation()}>
        Натикатор створювався по відосам з Ютубу. Уроки по JS + уроки з React. Щоб закрити вікно,
        натисніть на сіру зону за ним.
      </div>
    </div>
  );
}
