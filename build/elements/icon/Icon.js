'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Icon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Very simple icon wrapper
function Icon(props) {
  var icon = props.icon,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className;

  className += ' icon icon-' + icon;

  return _react2.default.createElement('span', _extends({}, props, { className: className }));
}