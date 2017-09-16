// // - Create decorator for class. 
// // Decorator should add method componentDidMount 
// // that console log 'Component ${name} was mounted'.

function ClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
	return class extends constructor {
		name: string;
		public componentDidMount () {
			console.log(`Component ${this.name} was mounted`);
		};
	}
}
@ClassDecorator


class SomeClass {
	public name: string = 'Component name1111';
	public componentDidMount () {
		
	}
}

let testClass = new SomeClass();

testClass.componentDidMount();