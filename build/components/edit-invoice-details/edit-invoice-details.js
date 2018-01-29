'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ValidationGroup from '../validation-group.jsx'

var EditInvoiceDetails = function (_Component) {
  _inherits(EditInvoiceDetails, _Component);

  function EditInvoiceDetails() {
    _classCallCheck(this, EditInvoiceDetails);

    return _possibleConstructorReturn(this, (EditInvoiceDetails.__proto__ || Object.getPrototypeOf(EditInvoiceDetails)).apply(this, arguments));
  }

  _createClass(EditInvoiceDetails, [{
    key: 'onSubmit',
    value: function onSubmit() {
      // http UPDATE details
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          firstname = _props$data.firstname,
          lastname = _props$data.lastname,
          address = _props$data.address,
          tax_id = _props$data.tax_id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'modal-description' },
          'Edit you billing details here'
        ),
        _react2.default.createElement(_reactBootstrap.Input, {
          label: 'First Name',
          type: 'text',
          name: 'Name',
          validationType: 'Name',
          value: firstname
        }),
        _react2.default.createElement(_reactBootstrap.Input, {
          label: 'Last Name',
          type: 'text',
          name: 'Surname',
          validationType: 'Surname',
          value: lastname
        }),
        _react2.default.createElement(_reactBootstrap.Input, {
          label: 'Address',
          type: 'text',
          name: 'Address',
          validationType: 'Address',
          value: address
        }),
        _react2.default.createElement(_reactBootstrap.Input, {
          label: 'Tax-ID',
          type: 'text',
          name: 'Tax-ID',
          validationType: 'Tax-ID',
          value: tax_id
        }),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'form-group buttons' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, className: 'text-right actions' },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'btn-default btn-secondary', onClick: this.props.onHide },
              'Cancel'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'btn-primary', validationGroupSubmit: true },
              'Save Details'
            )
          )
        )
      );
    }
  }]);

  return EditInvoiceDetails;
}(_react.Component);

exports.default = EditInvoiceDetails;