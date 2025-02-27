"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var $S = require('scriptjs');

var SimpleGoogleMaps =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleGoogleMaps, _Component);

  function SimpleGoogleMaps(props) {
    var _this;

    _classCallCheck(this, SimpleGoogleMaps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleGoogleMaps).call(this, props));
    _this.state = {
      mapLoaded: false
    };
    return _this;
  }

  _createClass(SimpleGoogleMaps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.google ? this.setState({
        mapLoaded: true
      }) : $S("https://maps.googleapis.com/maps/api/js?key=".concat(this.props.apiKey), function () {
        _this2.setState({
          mapLoaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.mapLoaded) {
        var map = new window.google.maps.Map(document.getElementById("map-".concat(this.props.index)), {
          zoom: this.props.zoom,
          center: {
            lat: this.props.center.lat,
            lng: this.props.center.lng
          }
        });

        if (this.props.markers) {
          if (Array.isArray(this.props.markers)) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.props.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;
                new google.maps.Marker({
                  position: i,
                  map: map
                });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            new google.maps.Marker({
              position: this.props.markers,
              map: map
            });
          }
        }
      }

      return _react["default"].createElement("div", {
        id: "map-".concat(this.props.index),
        style: this.props.style
      });
    }
  }]);

  return SimpleGoogleMaps;
}(_react.Component);

var _default = SimpleGoogleMaps;
exports["default"] = _default;
SimpleGoogleMaps.propTypes = {
  index: _propTypes["default"].number.isRequired,
  zoom: _propTypes["default"].number.isRequired,
  apiKey: _propTypes["default"].string.isRequired,
  center: _propTypes["default"].objectOf(_propTypes["default"].number.isRequired),
  style: _propTypes["default"].object.isRequired,
  markers: _propTypes["default"].oneOfType([_propTypes["default"].objectOf(_propTypes["default"].number), _propTypes["default"].arrayOf(_propTypes["default"].object)])
};