import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['My dog', 'The mailman', 'My grandma', 'A random guy'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let part1 = who[Math.floor(Math.random() * who.length)];
  let part2 = action[Math.floor(Math.random() * action.length)];
  let part3 = what[Math.floor(Math.random() * what.length)];
  let part4 = when[Math.floor(Math.random() * when.length)];
  return `${part1} ${part2} ${part3} ${part4}`;
}

window.onload = () => {
  document.getElementById("excuse").innerHTML = generateExcuse();
};


document.getElementById("generate-btn").addEventListener("click", () => {
  document.getElementById("excuse").innerHTML = generateExcuse();
});
