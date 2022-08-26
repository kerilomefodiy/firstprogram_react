import React, { useContext, useEffect, useState } from "react";
import MyBotton from "../Button/MyBotton";
import "./MainPart.css";
import useSound from "use-sound";
import sound1 from "../../Sounds/Untitled fuck.mp3";
import sound2 from "../../Sounds/Untitled culture.mp3";
import sound3 from "../../Sounds/y2mate.com - GTA San Andreas  Ah shit here we go again.mp3";
import { SoundContext } from "./context";

export default function MainPart() {
  const [number, setNumber] = useState(0);
  let [text, setText] = useState("");

  // викликаю змінну і функцію через юзконтекст
  const { sound } = useContext(SoundContext);

  const [play] = useSound(sound1);
  const [play1] = useSound(sound2);
  const [play2] = useSound(sound3);

  //rahuvalnik
  const rahuvalnik = () => {
    if (sound === true) {
      play();
    }

    if (number >= 0) {
      setNumber((number) => (number += 1));
    }

    let array = ("" + number).split("").map(Number); //робимо з числа массив чисел
    let lastElement = array.pop() + 1; //створюємо змінну яка вибирає та виводить останній елемент массива

    if (lastElement <= 4 && lastElement > 1) {
      setText((text = "Потика"));
    }

    if ((lastElement >= 5 && lastElement <= 9) || (number >= 11 && number < 22 && number !== 21)) {
      setText((text = "Потиків"));
    }

    if (lastElement === 0 || (number >= 110 && number < 122 && number !== 121)) {
      setText((text = "Потиків"));
    }

    if (lastElement === 1 && number !== 10) {
      setText((text = "Потик"));
    }
  };

  //ubivator
  const ubivator = () => {
    if (sound === true) {
      play2();
    }

    setNumber((number) => number * 0);
    setText((text = ""));
  };

  //nazadtor
  const nazadtor = () => {
    if (sound === true) {
      play1();
    }

    if (number > 0) {
      setNumber((number) => (number -= 1));
    }

    let array = ("" + number).split("").map(Number); //робимо з числа массив чисел
    let lastElement = array.pop() - 1; //створюємо змінну яка вибирає та виводить останній елемент массива

    if (lastElement <= 4 && lastElement > 1) {
      setText((text = "Потика"));
    }

    if ((lastElement >= 5 && lastElement <= 9) || (number >= 10 && number < 22 && number !== 21)) {
      setText((text = "Потиків"));
    }

    if (lastElement === 0 || (number >= 110 && number < 122 && number !== 121)) {
      setText((text = "Потиків"));
    }

    if (lastElement === 1 && number !== 12) {
      setText((text = "Потик"));
    }
  };

  return (
    <div className="container">
      <h1>Рахувальник потиків</h1>

      <MyBotton id="3" onClick={nazadtor}>
        назадтор
      </MyBotton>
      <MyBotton id="1" onClick={rahuvalnik}>
        натикатор
      </MyBotton>
      <MyBotton id="2" onClick={ubivator}>
        обнулятор
      </MyBotton>

      <h2>
        {number} {text}
      </h2>
    </div>
  );
  d;
}
