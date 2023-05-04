import { createCategory } from "./components/createCategory.js";
import { createHeader } from "./components/createHeader.js";
import { createElement } from "./helper/createElement.js";
import { fetchCategories } from "./service/api.service.js";

const initApp = async () => {
  const headerParent = document.querySelector(".header");
  const app = document.querySelector("#app");

  const headerObj = createHeader(headerParent);
  const categoryObj = createCategory(app);


  //убираем перезагрузку страницы при нажатии на ссылку + смена title
  const renderIndex = async e => {
    e?.preventDefault();
    //выводим данные с сервера
    const categories = await fetchCategories();
    if (categories.error) {
      const errorText = createElement('p', {
        className: 'server-error',
        textContent: 'Ошибка сервера, попробуйте зайти позже'
      });
      app.append(errorText);
      return;
    }
    categoryObj.mount(categories);
  };
  renderIndex();
  //вызываем по клику данную функцию
  headerObj.headerLogoLink.addEventListener("click", renderIndex);

  //при клике на кнопку в нашей функции
  headerObj.headerBtn.addEventListener("click", () => {
    categoryObj.unmount();
    headerObj.updateHeaderTitle("Новая категория");
  });
};

initApp();
