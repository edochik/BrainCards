import { createHeader } from "./components/createHeader.js";

const initApp = () => {
  const headerParent = document.querySelector(".header");
  const app = document.querySelector("#app");

  const headerObj = createHeader(headerParent);

  //убираем перезагрузку страницы при нажатии на ссылку + смена title
  const returnIndex = (e) => {
    e?.preventDefault();
    headerObj.updateHeaderTitle("Категории");
  };
  //вызываем по клику данную функцию
  headerObj.headerLogoLink.addEventListener("click", returnIndex);

  //при клике на кнопку в нашей функции
  headerObj.headerBtn.addEventListener("click", () => {
    headerObj.updateHeaderTitle("Новая категория");
  });
};

initApp();
