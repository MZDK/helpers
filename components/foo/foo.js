export default class Foo {

	constructor(elem) {
		this.init(elem);
		return this;
	}

	init(elem) {
		const self = this;
		console.log('Foo', elem);
	}

}
