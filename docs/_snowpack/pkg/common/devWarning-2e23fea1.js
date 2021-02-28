import { w as warningOnce } from './reactNode-2dfb2fa1.js';

var devWarning = function (valid, component, message) {
  warningOnce(valid, '[antd: '.concat(component, '] ').concat(message));
};

export { devWarning as d };
