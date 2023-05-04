export const createElement = (tag, attr) => {
  const element = document.createElement(tag);
  // копирует объект со всеми его свойствами
  return Object.assign(element, attr);
};
