//定义类
class Point {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}

}
var p3 = new Point(4,2);
console.log(p3.toString());

class Circus extends Point {
	constructor(x, y, z) {
		super(x, y);
		this.z = z;
	}
	toString() {
		return '(' + this.x + ', ' + this.y + ', ' + this.x + ')';
	}
	revert() {
		return this.x * this.y * this.z;
	}
}

var circus = new Circus(9 , 10, 11);
console.log(circus.toString());
