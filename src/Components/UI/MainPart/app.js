document.querySelector("h1").innerHTML = "Рахувальник потиків"; //отримати заголовок h1 (перший на сторінці), його свойство іннер хтмл відповідає за те що написано між тегами

let number = 0;
const onePotik = "Потик";
const dvaTruChetyrPotika = "Потика";
const manyPotikiv = "Потиків";
const niza = " Нізя";

const audio1 = new Audio("y2mate.com - GTA San Andreas  Ah shit here we go again.mp3"); //створюю нову змінну і присвоюю їй аудіо

const audio2 = new Audio("Untitled fuck.mp3"); //створюю нову змінну і присвоюю їй аудіо

const audio3 = new Audio("Untitled culture.mp3"); //створюю нову змінну і присвоюю їй аудіо

let rahuvalnik = () => {
  // ПЕРША ДІЯ ДОДАЄ ОДИН

  audio2.play(); //запускаю друге аудіо

  if (number < 0) {
    return (number = 0);
  }

  number += 1; //основна дія цієї функції це збільшення значення НАМБЕР на один

  let array = ("" + number).split("").map(Number); //робимо з числа массив чисел
  let lastElement = array.pop(); //створюємо змінну яка вибирає та виводить останній елемент массива
  console.log(lastElement);

  if (number >= 50 && number < 51) {
    const strinShablon1 = `${number} ${manyPotikiv} на що ти витрачаєш своє життя?!`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (number >= 30 && number < 31) {
    const strinShablon1 = `${number} ${manyPotikiv} це вже багато, краще зупинись!`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (number >= 31 && number < 32) {
    const strinShablon2 = `${number} ${onePotik} це достатньо!`;
    return (document.querySelector("h2").innerHTML = strinShablon2);
  }

  if (number >= 32 && number < 33) {
    const strinShablon = `${number} ${dvaTruChetyrPotika} це час схаменутись!`;
    return (document.querySelector("h2").innerHTML = strinShablon);
  }

  if (number >= 33 && number < 34) {
    const strinShablon = `${number} ${dvaTruChetyrPotika} та витрачений час `;
    return (document.querySelector("h2").innerHTML = strinShablon);
  }

  if (number >= 10 && number < 22 && number !== 21) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (number >= 110 && number < 122 && number !== 121) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (lastElement <= 4 && lastElement > 1) {
    const strinShablon = `${number} ${dvaTruChetyrPotika}`;
    return (document.querySelector("h2").innerHTML = strinShablon);
  }

  if (lastElement >= 5 && lastElement <= 9) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (lastElement >= 0 && lastElement < 1) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if ((lastElement = 1)) {
    const strinShablon2 = `${number} ${onePotik}`;
    return (document.querySelector("h2").innerHTML = strinShablon2);
  }
};

let ubivator = () => {
  //ДРУГА ДІЯ ВСЕ МНОЖИТЬ НА 0

  audio1.play(); //запускаю перше аудіо методом плей

  number = number * 0;

  return (document.querySelector("h2").innerHTML = number); //вішаємо собитіє
};

let nazadtor = () => {
  //ТРЕТЯ ДІЯ ВІДНІМАЄ ОДИН

  audio3.play(); //ЗАПУСКАЮ третє аудіо

  number -= 1; //основна дія цієї функції це збільшення значення НАМБЕР на один

  if (number < 0) {
    return (number = 0);
  }

  let array = ("" + number).split("").map(Number); //робимо з числа массив чисел
  let lastElement = array.pop(); //створюємо змінну яка вибирає та виводить останній елемент массива
  console.log(lastElement);

  if (number <= 0) {
    return (document.querySelector("h2").innerHTML = niza);
  }

  if (number >= 10 && number < 22 && number !== 21) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (number >= 110 && number < 122 && number !== 121) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (lastElement <= 4 && lastElement > 1) {
    const strinShablon = `${number} ${dvaTruChetyrPotika}`;
    return (document.querySelector("h2").innerHTML = strinShablon);
  }

  if (lastElement >= 5 && lastElement <= 9) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if (lastElement >= 0 && lastElement < 1) {
    const strinShablon1 = `${number} ${manyPotikiv}`;
    return (document.querySelector("h2").innerHTML = strinShablon1);
  }

  if ((lastElement = 1)) {
    const strinShablon2 = `${number} ${onePotik}`;
    return (document.querySelector("h2").innerHTML = strinShablon2);
  }
};

document.getElementById(1).onclick = rahuvalnik; //звертаємось до обєкта ктномпка в хтмл файлі по айді.

document.getElementById(2).onclick = ubivator;

document.getElementById(3).onclick = nazadtor;
