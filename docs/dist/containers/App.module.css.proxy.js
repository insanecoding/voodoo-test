export let code =
  '._header_kexi6_1 {\n  background-color: #fff;\n  min-height: 64px;\n  border-bottom: 1px solid #e1e4e8;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n._main_kexi6_11 {\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 64px 0;\n\n  display: grid;\n  grid-row-gap: 40px;\n  row-gap: 40px;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(3, minmax(25px, -webkit-min-content));\n  grid-template-rows: repeat(3, minmax(25px, min-content));\n\n  justify-items: center;\n  align-items: start;\n  width: 100%;\n}\n\n@media (min-width: 750px) {\n  ._main_kexi6_11 {\n    width: 800px;\n  }\n}\n\n._rangePicker_kexi6_34 {\n  display: block;\n}\n\n._footer_kexi6_38 {\n  min-height: 64px;\n  background: #000;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}';
let json = {
  header: '_header_kexi6_1',
  main: '_main_kexi6_11',
  rangePicker: '_rangePicker_kexi6_34',
  footer: '_footer_kexi6_38',
};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
