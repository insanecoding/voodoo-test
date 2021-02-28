export let code =
  '._holder_b8nzc_1 {\n  width: 100%;\n}\n\n._deeplyNestedPanel_b8nzc_5 div {\n    color: rgba(0, 0, 0, 0.85) !important;\n  }';
let json = {
  holder: '_holder_b8nzc_1',
  deeplyNestedPanel: '_deeplyNestedPanel_b8nzc_5',
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
