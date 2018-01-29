'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactBootstrap = require('react-bootstrap');

var _icon = require('../../elements/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Icon from 'components/icon'

var DInput = function (_Component) {
  _inherits(DInput, _Component);

  function DInput(props) {
    _classCallCheck(this, DInput);

    var _this = _possibleConstructorReturn(this, (DInput.__proto__ || Object.getPrototypeOf(DInput)).call(this, props));

    _this.renderRightIcon = function () {
      var tooltip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'right-icon-tooltip' },
        _this.props.rightIcon.tooltip
      );

      // const Icon = this.props.icon || <div />

      var icon = function icon() {
        return _this.props.rightIcon.click ? _react2.default.createElement(_icon2.default, { className: 'clickable',
          onClick: _this.props.rightIcon.click,
          icon: _this.props.rightIcon.iconName }) : _react2.default.createElement(_icon2.default, { icon: _this.props.rightIcon.iconName });
      };

      return _this.props.rightIcon && _this.props.rightIcon.tooltip ? _react2.default.createElement(
        _reactBootstrap.OverlayTrigger,
        { placement: 'top', overlay: tooltip },
        icon()
      ) : icon();
    };

    _this.getInputRef = function (input) {
      // Store the input ref
      _this.input = input;
    };

    _this.input = null; // a reference to the input DOM element, useful for calling ".focus()"
    return _this;
  }

  _createClass(DInput, [{
    key: 'render',
    value: function render() {
      // const Icon = this.props.icon || <div />
      var _props$displayState = this.props.displayState,
          isInvalid = _props$displayState.isInvalid,
          inFocus = _props$displayState.inFocus,
          value = _props$displayState.value;


      return _react2.default.createElement(
        'div',
        { className: isInvalid && !inFocus && !this.props.validationStyleInfo ? 'dinput-invalid' : 'dinput' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'dinput-label', htmlFor: this.props.name },
            this.props.label
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-group' },
            _react2.default.createElement(
              'div',
              { className: 'input-group-addon' },
              this.props.leftIcon && this.props.leftIcon.iconName ? _react2.default.createElement(_icon2.default, { icon: this.props.leftIcon.iconName }) : null
            ),
            this.props.tooltip != null ? this.props.password && !this.props.password.isVisible ? _react2.default.createElement(
              _reactBootstrap.OverlayTrigger,
              { trigger: 'focus', placement: 'top', overlay: this.props.tooltip },
              _react2.default.createElement('input', {
                type: 'password',
                ref: this.getInputRef,
                placeholder: this.props.placeholder,
                className: 'form-control',
                onChange: this.props.onChange || function () {},
                onBlur: this.props.onBlur || function () {},
                value: value,
                autoComplete: this.props.autoComplete,
                disabled: this.props.disabled,
                id: this.props.name
              })
            ) : _react2.default.createElement(
              _reactBootstrap.OverlayTrigger,
              { trigger: 'focus', placement: 'top', overlay: this.props.tooltip },
              _react2.default.createElement('input', {
                type: 'text',
                ref: this.getInputRef,
                maxLength: this.props.length,
                placeholder: this.props.placeholder,
                className: 'form-control',
                value: value,
                onChange: this.props.onChange || function () {},
                onBlur: this.props.onBlur || function () {},
                onFocus: this.props.onFocus || function () {},
                disabled: this.props.disabled,
                autoComplete: this.props.autoComplete,
                id: this.props.name
              })
            ) : this.props.password && !this.props.password.isVisible ? _react2.default.createElement('input', {
              type: 'password',
              ref: this.getInputRef,
              placeholder: this.props.placeholder,
              className: 'form-control',
              onChange: this.props.onChange || function () {},
              onBlur: this.props.onBlur || function () {},
              value: value,
              autoComplete: this.props.autoComplete,
              disabled: this.props.disabled,
              id: this.props.name
            }) : _react2.default.createElement('input', {
              type: 'text',
              ref: this.getInputRef,
              maxLength: this.props.length,
              placeholder: this.props.placeholder,
              className: 'form-control',
              value: value,
              onChange: this.props.onChange || function () {},
              onBlur: this.props.onBlur || function () {},
              onFocus: this.props.onFocus || function () {},
              disabled: this.props.disabled,
              autoComplete: this.props.autoComplete,
              id: this.props.name }),
            _react2.default.createElement(
              'div',
              { className: this.props.password ? 'input-group-addon password-reveal-icon' : 'input-group-addon right-icon' },
              this.props.rightIcon && this.props.rightIcon.iconName ? this.renderRightIcon() : null
            )
          ),
          // bear in mind that the use of dangerouslySetInnerHTML is to passthru a const html string
          this.props.validationErrorMsg ? _react2.default.createElement(
            'div',
            { className: this.props.validationStyleInfo ? "validation-info" : "validation-error" },
            isInvalid && !inFocus ? _react2.default.createElement(
              'span',
              null,
              ' ',
              this.props.validationErrorMsg,
              ' '
            ) : null
          ) : null
        )
      );
    }
  }]);

  return DInput;
}(_react.Component);

DInput.propTypes = {
  label: _propTypes.PropTypes.string,
  leftIcon: _propTypes.PropTypes.object,
  rightIcon: _propTypes.PropTypes.object,
  cVal: _propTypes.PropTypes.string,
  validation: _propTypes.PropTypes.object,
  onChange: _propTypes.PropTypes.func,
  onBlur: _propTypes.PropTypes.func,
  password: _propTypes.PropTypes.object,
  autoComplete: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.bool]), // The input tag's autocomplete attribute
  disabled: _propTypes.PropTypes.bool,
  tooltip: _propTypes.PropTypes.string,
  icon: _propTypes.PropTypes.func
};
DInput.defaultProps = {
  autoComplete: false,
  disabled: false
};
exports.default = DInput;