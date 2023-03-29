const button = document.querySelector(".btn");
const clear = document.querySelector(".btn-clr");
const btnY = document.querySelector(".btn-y");
const btnN = document.querySelector(".btn-n");
const input = document.querySelector("#input-name");
const txt = document.querySelector("#text");
const text = document.querySelector("#text-2");
const he = document.querySelector(".quest");

const sayHi = () => {
  let name = input.value;
  if (!input.value) {
    alert("Введи имя !!!");
    return;
  }

  txt.textContent = `Привет, ${name}!`;
  he.textContent = `Ты точно ${name}?`;
  input.value = "";
  btnY.classList.remove("visually-hidden");
  btnN.classList.remove("visually-hidden");
};

const remove = () => {
  input.value = "";
  txt.textContent = "Как тебя зовут, дядя?";
  text.textContent = "";
  he.textContent = "";
  btnY.classList.add("visually-hidden");
  btnN.classList.add("visually-hidden");
};
button.addEventListener("click", sayHi);
input.addEventListener("keydown", (e)=> {
  if (e.keyCode === 13) {sayHi()}
});
clear.addEventListener("click", remove);

btnY.addEventListener("click", () => {
  text.textContent = "Ай, молодэць! 😎"; 
});

btnN.addEventListener("click", () => {
  text.textContent = "Подумай ещё! 😄";
});
