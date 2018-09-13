"use strict";

var _path = require('path');

module.exports = Franz => {
  Franz.injectCSS(_path.join(__dirname, 'dark.css'));
};