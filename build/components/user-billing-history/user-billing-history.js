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

var BillingHistory = function (_Component) {
  _inherits(BillingHistory, _Component);

  function BillingHistory(props) {
    _classCallCheck(this, BillingHistory);

    var _this = _possibleConstructorReturn(this, (BillingHistory.__proto__ || Object.getPrototypeOf(BillingHistory)).call(this, props));

    _this.fetchBillingHistory = function () {
      // http res
      _this.data = {
        firstname: 'Jim',
        lastname: 'Doe',
        address: 'No. 2, Address Line 2, Address Line 3, Address Line 4',
        tax_id: '1234567890-PL',
        foo: 'poiuyt',
        bar: 'baz'
      };
    };

    _this.downloadPDF = function () {
      // Query PDF download
      console.log('downloading PDF');
    };

    _this.editDetails = function () {
      var openEditModal = _this.props.openEditModal;

      var editableDetails = function (_ref) {
        var firstname = _ref.firstname,
            lastname = _ref.lastname,
            address = _ref.address,
            tax_id = _ref.tax_id;
        return {
          firstname: firstname,
          lastname: lastname,
          address: address,
          tax_id: tax_id
        };
      }(_this.data);

      openEditModal(editableDetails);
    };

    _this.fetchBillingHistory();
    return _this;
  }

  _createClass(BillingHistory, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _data = this.data,
          firstname = _data.firstname,
          lastname = _data.lastname,
          address = _data.address,
          tax_id = _data.tax_id;

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            { className: 'content-wrap' },
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 8 },
                firstname,
                ' ',
                lastname,
                _react2.default.createElement('br', null),
                address,
                _react2.default.createElement('br', null),
                'TAX-ID: ',
                tax_id
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 4 },
                _react2.default.createElement(
                  'button',
                  { className: 'pull-right', onClick: function onClick(e) {
                      e.preventDefault();_this2.editDetails();
                    } },
                  'Edit Details'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            { className: 'content-wrap settings-body' },
            _react2.default.createElement(
              _reactBootstrap.Table,
              { bordered: true, condensed: true, hover: true },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Product'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Date'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Payment Method'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Amount'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Invoice'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    'Swaggerhub'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    '20/10/18'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Visa 4125'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    '$20.00'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'button',
                      { id: '1234567', onClick: function onClick(e) {
                          e.preventDefault();_this2.downloadPDF();
                        } },
                      'Download'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return BillingHistory;
}(_react.Component);

exports.default = BillingHistory;