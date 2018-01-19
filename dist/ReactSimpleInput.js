'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      isEmpty: _this.props.defaultValue !== ''
    };

    _this.onClick = _this.onClick.bind(_this);

    var date = Date.now();

    _this.timeoutsDates = {
      onChange: date,
      onKeyUp: date,
      onKeyDown: date,
      onKeyPress: date
    };

    _this.timeouts = {};
    return _this;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var clearButton = false;

      if (this.props.clearButton && this.state.isEmpty) {
        clearButton = _react2.default.createElement(
          'div',
          { className: 'react-simple-input-clear', onClick: function onClick() {
              _this2.clear();
            } },
          '\xD7'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'react-simple-input-container ' + this.props.classNameContainer },
        _react2.default.createElement('input', {
          type: 'text',
          defaultValue: this.props.defaultValue,
          className: 'react-simple-input ' + this.props.className,
          placeholder: this.props.placeholder,
          ref: 'input',
          onInput: function onInput(e) {
            _this2.delayedEvent(e, 'onChange');
          },
          onKeyDown: function onKeyDown(e) {
            _this2.delayedEvent(e, 'onKeyDown');
          },
          onKeyUp: function onKeyUp(e) {
            _this2.delayedEvent(e, 'onKeyUp');
          },
          onKeyPress: function onKeyPress(e) {
            _this2.delayedEvent(e, 'onKeyPress');
          },
          onClick: this.onClick
        }),
        clearButton
      );
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.persist();

      if (this.props.selectOnClick) this.refs.input.select();

      this.props.onClick(e);
    }
  }, {
    key: 'delayedEvent',
    value: function delayedEvent(e, type) {
      e.persist();

      var self = this;
      var now = Date.now();
      var timeout = this.props.eventsTimeouts[type] || 0;

      if (now - this.timeoutsDates[type] < timeout) {
        clearTimeout(this.timeouts[type]);
      }

      this.timeoutsDates[type] = now;

      self.setState({ isEmpty: e.currentTarget.value !== '' });

      this.timeouts[type] = setTimeout(function () {
        self.props[type](e);
      }, timeout);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.refs.input.value = '';
      var event = new Event('input', { bubbles: true });
      this.refs.input.dispatchEvent(event);
    }
  }]);

  return Input;
}(_react.Component);

Input.defaultProps = {
  className: '',
  classNameContainer: '',
  defaultValue: '',
  placeholder: '',
  clearButton: false,
  selectOnClick: false,
  eventsTimeouts: {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onKeyPress: function onKeyPress() {},
  onClick: function onClick() {}
};

Input.propTypes = {
  className: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  clearButton: _propTypes2.default.bool,
  selectOnClick: _propTypes2.default.bool,
  eventsTimeouts: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};

exports.default = Input;