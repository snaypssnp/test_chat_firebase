export default (tagName, ...classNames) => {
  const el = document.createElement(tagName);

  if (classNames.length) {
    el.classList.add(...classNames);
  }

  return el;
};
