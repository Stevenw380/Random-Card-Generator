/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.getElementById("numero").innerHTML = "7";
  document.getElementById("pick-up").innerHTML = "♦";
  document.getElementById("pick-down").innerHTML = "♦";
  document.getRandomNumber;

  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "k"];
  let pickUp = ["♦", "♥", "♠", "♣"];
  let pickDown = ["♦", "♥", "♠", "♣"];
  let indexnumero = Math.floor(Math.random() * numero);
  return numero[indexnumero];
};
