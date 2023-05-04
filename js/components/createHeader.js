import { createElement } from "../helper/createElement.js";

//функция создающая шапку сайта
export const createHeader = (parent) => {
  const container = createElement("div", {
    className: "container header__container"
  });
  //вставляем элемент в родителя
  parent.append(container);

  //создаем элемент a
  const headerLogoLink = createElement("a", {
    href: "#",
    className: "header__logo-link"
  });

  //создаем элемент logo
  const logo = createElement("img", {
    src: "img/logo.svg",
    className: "header__logo",
    alt: "Логотип сервиса Brain Cards"
  });
  //лого вставляем в ссылку
  headerLogoLink.append(logo);

  //создаем элемент h2
  const headerTitle = createElement("h2", {
    className: "header__subtitle",
    textContent: "Категории"
  });

  //создаем элемент button
  const headerBtn = createElement("button", {
    className: "header__btn",
    textContent: "Добавить категорию"
  });

  //в контейнер вставляем ссылку, title, button
  container.append(headerLogoLink, headerTitle, headerBtn);

  //метод меняющий заголовок
  const updateHeaderTitle = (title) => {
    headerTitle.textContent = title;
  };

  //возвращает  все функции, которые создали
  return { headerLogoLink, headerBtn, updateHeaderTitle };
};

