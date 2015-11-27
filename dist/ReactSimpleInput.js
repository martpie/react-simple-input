'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {

            var clearButton = false;

            if (this.props.clearButton && this.state.value !== '') {
                clearButton = _react2.default.createElement(
                    'div',
                    { className: 'react-simple-input-clear', onClick: this.clear.bind(this) },
                    '×'
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'react-simple-input-container ' + this.props.classNameContainer },
                _react2.default.createElement('input', {
                    type: 'text',
                    className: 'react-simple-input ' + this.props.className,
                    placeholder: this.props.placeholder,
                    ref: 'input',
                    onChange: this.change.bind(this),
                    onClick: this.select.bind(this) }),
                clearButton
            );
        }
    }, {
        key: 'select',
        value: function select() {
            if (this.props.selectOnClick) this.refs.input.select();
            this.props.onClick();
        }
    }, {
        key: 'change',
        value: function change() {
            var self = this;
            var now = window.performance.now();

            if (now - this.lastFilterSearch < this.props.changeTimeout) {
                clearTimeout(this.filterSearchTimeOut);
            }

            this.lastFilterSearch = now;

            var value = self.refs.input.value;
            self.setState({ value: value });

            this.filterSearchTimeOut = setTimeout(function () {
                self.props.onChange(value);
            }, this.props.changeTimeout);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.refs.input.value = '';
            this.change.call(this);
        }
    }]);

    return Input;
})(_react.Component);

Input.defaultProps = {
    className: '',
    classNameContainer: '',
    placeholder: '',
    changeTimeout: 0,
    clearButton: false,
    selectOnClick: false,
    onChange: function onChange() {},
    onClick: function onClick() {}
};

Input.propTypes = {
    className: _react2.default.PropTypes.string,
    classNameContainer: _react2.default.PropTypes.string,
    placeholder: _react2.default.PropTypes.string,
    changeTimeout: _react2.default.PropTypes.number,
    clearButton: _react2.default.PropTypes.bool,
    selectOnClick: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func,
    onClick: _react2.default.PropTypes.func
};

exports.default = Input;