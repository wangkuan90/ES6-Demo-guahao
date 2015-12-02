'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//定义类

var Point = (function () {
	function Point(x, y) {
		_classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	}

	_createClass(Point, [{
		key: 'toString',
		value: function toString() {
			return '(' + this.x + ', ' + this.y + ')';
		}
	}]);

	return Point;
})();

var p3 = new Point(4, 2);
console.log(p3.toString());

var Circus = (function (_Point) {
	_inherits(Circus, _Point);

	function Circus(x, y, z) {
		_classCallCheck(this, Circus);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Circus).call(this, x, y));

		_this.z = z;
		return _this;
	}

	_createClass(Circus, [{
		key: 'toString',
		value: function toString() {
			return '(' + this.x + ', ' + this.y + ', ' + this.x + ')';
		}
	}, {
		key: 'revert',
		value: function revert() {
			return this.x * this.y * this.z;
		}
	}]);

	return Circus;
})(Point);

var circus = new Circus(9, 10, 11);
console.log(circus.toString());