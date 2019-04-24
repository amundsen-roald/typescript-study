/*
	TypeScript Demo
	website: https://legacy.gitbook.com/book/xcatliu/typescript-tutorial/details
 */

/**
 * 适合学习TypeScript的人：
 * 	1.熟悉JS
 * 	2.了解ES6
 * 	3.了解NodeJs
 * 	4.想了解TypeScript或想对TypeScript有更深的理解
 */

/**
 * 什么是TypeScript：
 * 	TS是JS的一个超集，主要提供了类型系统和对ES6的支持，它由Microsoft开发，代码在github。
 * 
 * 官网的定义：
 * 	TypeScript是JS的类型的超集，它可以编译成纯js。编译出来的js可以运行在任何浏览器上。TS编译工具可以运行在任何服务器和任何系统上。TS是开源的。
 * 
 * 为什么选择TypeScript（个人总结）：
 * 
 * 	1.TypeScript增加了代码的可读性和可维护性
 * 		类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
 * 		可以在编译阶段就发现大部分错误，这总比在运行时出错好
 * 		增强了编译器和IDE的功能，包括代码补全、接口提示、跳转到定义、重构等
 * 
 * 	2.TypeScript非常包容
 * 		TypeScript是JS的超集，.js的文件可以直接重命名为.ts即可
 * 		即使不显式地定义类型，也能够自动做出类型推论
 * 		可以定义从简单到复杂的一切类型
 * 		即使TypeScript编译报错，也可以生成JavaScript文件
 * 		兼容第三方库，即使第三方库不是用TypeScript写的，也可以编写单独的类型
 * 
 * 	3.TypeScript拥有活跃的社区
 * 		大部分第三方库都有提供给TypeScript的类型定义文件
 * 		Google开发的Angular2或更高版本就是使用TypeScript写的
 * 		ES6的一部分特性是借鉴TypeScript的
 * 		TypeScript拥抱了ES6规范，也支持部分ES7草案的规范
 * 
 * 	4.TypeScript的缺点
 * 		有一定的学习成本，需要理解接口(Interfaces)、泛型(Generics)、类型(Classes)、枚举类型(Enums)等前端工程师可能不是很熟悉的东西。而且中文资料也不是很多
 * 		短期可能会增加一些开发成本，毕竟要多些一些类型的定义，不过对于一个需要长期维护的项目，TypeScript能够减少其维护成本
 * 		集成到构建流程需要一些工作量
 * 		可能和一些库结合的不是很完美
 * 
 * 请结合项目需求考虑是否使用TypeScript
 * 
 * 安装TypeScript：
 * 	npm install -g typescript
 * 
 * 编译一个hello.ts文件的命令：
 * 	tsc hello.ts
 * 
 * 建议使用VsCode编译器，内置了TypeScript支持，并且它本身也是TypeScript编写的
 */


// 第一部分：基础
/**
*	 原始数据类型
*	 任意值
*	 类型推论
*  联合类型
*	 对象的类型-接口
*	 数组的类型
*	 函数的类型
*	 类型断言
*	 声明文件
*	 内置对象
*/

// 第二部分：进阶（在648行）
/**
 * 	类型别名
 * 	字符串字面量类型
 * 	元组
 * 	枚举
 * 	类
 * 	类与接口
 * 	泛型
 * 	声明合并
 * 	扩展阅读
 */	



 
// ****************************** 第一部分：基础 ******************************







// 原始数据类型
// 包括：布尔值、 数值、字符串、null、undefined和ES6中的新类型Symbol

// 布尔值：
let isDone: boolean = false;
// 注意：使用构造函数new Boolean创造的对象不是布尔值
let createByNewBoolean: boolean = new Boolean(1); // 报错
// 事实上，new Boolean()返回的是一个Boolean对象
let createByNewBoolean2: Boolean = new Boolean(1); // 不会报错
// 直接调用Boolean也可以返回一个boolean类型：
let createByNewBoolean3: boolean = Boolean(1);
// 在TypeScript中，boolean是js中的基本类型，而Boolean是js中的构造函数。其他基本类型(除了null和undefined)一样。

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6中的二进制表示法
let binaryLiteral: number = 0b1010; // 编译为10
// ES6中的八进制表示法
let octalListeral: number = 0o744; // 编译为484
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串：
let myName: string = 'Tom';
// ES6的模板字符串
let sentence: string = `Hello, my name is ${myName}.`;

// 空值：
// 可以用void表示没有任何返回值的函数
function alertName(): void{
	alert('my name is Tom');
}
// 声明一个void没有什么用，因为你只能给它赋值为undefined和null
let unusable: void = null;
let unusable2: void = undefined;

// null和undefined：
let u: undefined = undefined;
let n: null = null;
// undenfined类型的变量只能被赋值为undefined，null类型的变量只能被赋值为null，与void的区别是，undefined和null是所有类型的子类型。
// 也就是说，undenfined或者null类型的变量，可以赋值给number和其他类型的变量：
let num: number = undefined; // 不会报错
// 这样也不会报错
let u2: undefined;
let num2: number = u2;
// 而void类型的变量不能赋值给number或其他基本类型的变量
let u3: void;
let num3: number = u3; // 报错







// 任意值
// 任意值(any)用来表示允许赋值为任意类型

// 如果是一个普通类型，在赋值过程中改变类型是不允许的：
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7; // 报错
// 如果是any类型，则允许被赋值为任意类型
let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7; // 不会报错
// 任意值的属性和方法：
// 在任意值上访问任何属性都是允许的：
let anyThing: any = 'hello';
console.log(anyThing.myName); // 不会报错
console.log(anyThing.myName.firstName); // 不会报错
// 也允许调用任何方法：
let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerrt').sayHello();
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

// 未声明类型的变量：
// 变量如果在声明的时候，未指定其类型，那么它就会被自动识别为任意值类型 (类型推论)
let something;
something = 'seven';
something = 7; // 不会报错
something.setName('Tom'); // 不会报错
// 等价于：
let something2: any; // (这里写someThing2只是为了不和someThing变量冲突)
something2 = 'seven';
something2 = 7;
something2.setName('Tom');







// 类型推论：
// 如果没有明确指定类型，那么TS会依照类型推论的规则推断出一个类型
let someNumber1 = 'seven';
someNumber1 = 7; // 报错
// 事实上，它等价于：
let someNumber2: string = 'seven'; // typescript对它进行了类型推论，判断为string类型 (为了变量名不重复改成someNumber2)
someNumber2 = 7; // 报错
// 如果定义的时候没有赋值，不管以后会不会赋值，都会被推论为any类型而完全不被类型检查
let someThings; // 推论为any类型
someThings = 'seven';
someThings = 7;







// 联合类型：
// 表示取值可以为多种类型中的一种

let myFavoriteNumbers: string | number;
myFavoriteNumbers = 'seven';
myFavoriteNumbers = 7; // 不会报错
// 如果赋值为其他类型：
let myFavoriteNumbers2: string | number;
myFavoriteNumbers2 = true; // 报错，不是string或者number类型

// 访问联合类型的属性或方法：
// ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: number | string) {
	return something.length // length不是string类型和number类型共有的属性，所以会报错
}
function getString(something: number | string) {
	return something.toString() // 访问共有的方法是可以的
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5
myFavoriteNumber3 = 7;
// myFavoriteNumber3在这里被推断为number类型
console.log(myFavoriteNumber3.length); // 报错，number没有length属性







// 对象的类型——接口
/*
	什么是接口：
		在面向对象语言中，接口(interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implements)
		typescript中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对 [对象的形状(shape)] 进行描述
 */

// 通常接口名称的首字母是大写的
interface Person {
	name: string;
	age: number;
}
// 定义变量tom，它的类型是Person，这样一来就约束了tom的形状必须和接口Person一致
let tom: Person = {
	name: 'Tom',
	age: 17
}
// 注意：对象的形状必须与接口保持一致，不允许多或者少属性：
let peter: Person = {
	name: 'peter' 
	// 少了age属性，报错
}
let ben: Person = {
	name: 'ben',
	age: 15,
	// 多了gender属性，报错
	gender: 4
}

// 可选属性：
// 有时候我们希望不和接口形状保持一致，就可以使用可选属性
interface Person2 {
	name: string;
	age?: number; // 添加?变成可选属性
}
let jack: Person2 = {
	name: 'jack'
	// age是可选属性，可以写也可以不写
}
// 注意：这里依旧不可以添加未定义的属性，否则会报错
let john: Person2 = {
	name: 'john',
	age: 18, // age是可选属性
	gender: 'man' // 未定义的属性，报错
}

// 任意属性：
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
interface Person3 {
	name: string;
	age?: number;
	// 任意属性
	[propName: string]: any; // 使用[propName: string]定义了任意属性取string类型的值
}
let tom2: Person3 = {
	name: 'tom2',
	age: 16,
	gender: 'man' // 任意属性，不会报错
}
// 注意：一旦定义了任意属性，那么已经确定的属性和可选的属性都必须是它的子属性：
interface Person4 {
	name: string; // name的类型是string，不会报错
	age?: number; // 报错，因为属性age是number类型，不是任意属性[propName: string]的类型string类型的子属性
	[propName: string]: string;
}

// 只读属性：
// 有时候我们只希望对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性
interface Person5 {
	readonly id: number;
	name: string;
	age?: number;
	[propName: string]: any;
}
let tom3: Person5 = {
	// 只读属性id必须写，并初始化赋值
	id: 22,
	name: 'tom3',
	age: 20,
	gender: 'man'
}
tom3.id = 7; // 报错，只能在定义的时候赋值一次，不允许再更改







// 数组的类型
// 在ts中，数组类型有多种定义方式，比较灵活

// 最简单的方法：[类型 + 方括号]表示法
let fibonacci: number[] = [1,2,3,4,5]; // 表示由number类型组成的数组
// 数组的元素中不允许出现其他的类型：
let fibonacci2: number[] = [1,'2',3,4,5]; // 出现了字符串2，报错
// 这样也会报错：
let fibonacci3: number[] = [1,2,3,4,5];
fibonacci3.push('6'); // 传入了一个string类型而不是number的类型，报错

// 数组泛型
// 也可以使用数组泛型 Array<elemType> 来表示数组
let fibonacci4: Array<number> = [1,2,3,4,5];
// 关于泛型，可以参考后面的泛型

// 用接口表示数组
interface NumberArray {
	[index: number]: number;
}
let fibonacci5: NumberArray = [1,2,3,4,5];
// NumberArray表示：只要index的类型是number，那么值的类型必须是number (index只是一个形式属性名，可以改成别的名称)

// any在数组中的应用
// 一个常见的做法是，用any表示数组中允许出现任意类型
let list: any[] = ['xiaoming', 2, {gender: 'man'}];

// 类数组
// 类数组(Array-like-Object)不是数组类型，比如arguments
function sum() {
	let args: number[] = arguments; // 报错，类数组不是数组类型 (这里的类数组是arguments)
}
// 事实上，常见的类数组都有自己的接口定义，如IArguments,NodeList,HTMLCollecton等：
function sums() {
	let args: IArguments = arguments; // 类数组arguments的接口是IArguments
}







// 函数的类型

// 函数声明
// 在JavaScript中，有两种常见的定义函数的方式——函数声明(Function Declaration)和函数表达式(Function Expression)
// 1)函数声明：
function sum3(x, y) {
	return x + y;
}
// 2)函数表达式：
let mySum = function (x, y) {
	return x + y;
}
// 一个函数有输入和输出，要在TypeScript中对其进行约束，需要把输入和输出都考虑到
// 函数声明的类型定义较简单：
function sum4(x: number, y: number): number {
	return x + y
}
// 注意，输入多余的(或是少于要求的)参数，是不被允许的
sum4(1,2,3); // 报错，多余的参数
sum4(1); // 报错，少了参数

// 函数表达式
let mySum2 = function (x: number, y: number): number {
	return x + y;
}
// 上面这段代码是可以通过编译的，但是上面的代码只对等于号右侧的匿名函数进行了类型定义，而等于号左侧的变量mySum2，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给mySum2添加类型，应该这样做：
let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
	return x + y;
}
// 注意！不要混淆了TypeScript中的 => 和 ES6中的 => 
// 在TS的类型定义中， => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在ES6中， => 叫做箭头函数，应用很广泛，具体参考ES6文档。

// 用接口定义函数的形状
// 我们也可以使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc {
	(source: string, subString: string): boolean; // 两个定义好类型的参数，函数返回值的布尔值
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	return source.search(subString) !== 1; // 返回一个布尔值
}

// 可选参数
// 前面说过，输入多余的(或者少于要求的)参数，是不允许的。那么如何定义可选的参数呢？和前面的接口(interfaces)相似，加上?即可。
function buildName(firstName: string, lastName?: string): string {
	if(lastName){
		return firstName + lastName;
	}else {
		return firstName;
	}
}
let tomcat = buildName('Tom', 'Cat');
let tomm = buildName('Tomm')
// 需要注意的是，可选参数必须在必须参数的后面。换句话说，可选参数后面，不允许再出现必须参数了。
function buildName2(firstName?: string, lastName: string): string { // 报错，可选参数后面不能出现必须参数
	if(lastName){
		return firstName + lastName;
	}else {
		return firstName;
	}
}

// 参数默认值
function  buildName3(firstName: string, lastName: string = 'Cat'): string {
	return firstName + lastName;
}
// 此时就不受 [可选参数在必须参数后面] 的限制了
function buildName4(firstName?: string, lastName: string = 'Cat'): string {
	return firstName + lastName;
}

// 剩余参数
// ES6中，可以使用...rest的方式获取函数中剩余参数(rest参数)
function pushFn(array, ...items): void {
	items.forEach(function (item) {
		// item是items中的每一个元素
		array.push(item);
	})
}
let a = [];
pushFn(a, 1, 3, 4);
console.log(a); // [1,3,4]
//事实上，items是一个数组，所以我们可以用数组的类型来定义它
function pushs(array: any[], ...items: any[]): void {
	items.forEach(function(item){
		array.push(item);
	})
}
let a2 = [];
pushs(a2, 'tom', {age: 16}, 4);
console.log(a2); // ['tom',{age: 16},4]
// 注意：rest参数只能是最后一个参数，具体请查阅ES6中的rest参数。

// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
// 比如：我们需要实现一个函数reverse，输入数字123的时候，输出反转的数字321，输入字符串'hello'的时候，输入反转的字符串'olleh'。
// 利用联合类型，我们可以这么实现：
function reverse1(x: number | string): number | string {
	if(typeof x === 'number'){
		return Number(x.toString().split('').reverse().join(''));
	}else if(typeof x === 'string'){
		return x.split('').reverse().join('');
	}
}
// 然而这样有一个缺点，就是不能够精确地表达。输入为数字的时候，输入应该也为数字;输入字符串的时候，输入应该也为字符串。(有点像纯函数)
// 这时，我们可以使用重载定义多个reverse的函数类型
function reverse(x: number): number; // 如果是number类型就输出number类型
function reverse(x: string): string; // 如果是string类型就输出string类型
function reverse(x: number | string): number | string {
	if(typeof x === 'number'){
		return Number(x.toString().split('').reverse().join(''));
	}else if(typeof x === 'string'){
		return x.split('').reverse().join('');
	}
}
// 上例中，我们重复定义了多次函数reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确地看到前两个提示。
// 注意：TS会优先从最前面的函数定义开始匹配，所以多个函数如果有包含关系，需要优先把精确的定义写在前面







// 类型断言
/*
	类型断言(Type Assertion)可以用来手动指定一个值的类型
	语法：
		<类型>值
	或：
		值 as 类型
 */
// 例子：将一个联合类型的变量指定为一个更加具体的类型
// 之前提过：当TS不确定一个联合类型的变量到底是哪种类型时，我们只能访问它们共有的属性和方法
function test(something: number | string): number {
	return something.length // 报错，因为length不是number和string类型共有的属性
}
// 而有时候，我确实需要在还不确定类型的时候，去访问它的属性或方法，比如：
function getLength1(something: number | string): number {
	// 依然会报错，因为number类型没有length属性
	if(something.length){
		return something.length 
	}else {
		return something.toString().length;
	}
}
// 此时，可以使用类型断言，将something断言成string类型
function getLength2(something: number | string): number {
	if((<string>something).length){
		return (<string>something).length
	}else {
		return something.toString().length
	}
}
// 类型断言的用法如上，在需要断言的变量前加上<类型>
// 注意！类型断言不是类型转换，因此断言成一个联合类型中不存在的类型是不允许的，会报错：
function error1(something: number | string): boolean {
	return <boolean>something; // 报错
}







// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件

// 声明语句：
// 假如我们使用了jQuery库，我们常用的获取id为main的节点的方式如$('#main')或者jQuery('#main')，但是，TS本身不知道$或jQuery是什么东西
// 这时，我们需要使用declare关键字来定义它的类型，来帮助TS判断我们传入的参数类型对不对
declare var jQuery: (string) => any; // 在TS的类型定义中， => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
jQuery('#main');
// 或者：
declare var $: (string) => any;
$('#main');
// declare关键字定义的类型只会在编译时检查，编译结果中会删除：
// 上面编译的结果是：
jQuery('#main');
$('#main');

// 声明文件：
// 通常我们会把类型声明单独放到一个文件中，这就是声明文件：
/*
	jQuery.d.ts：
		declare var jQuery: (string) => any;

	我们约定声明文件以.d.ts结尾

	然后在使用到声明文件的开头，用[三斜线指令]表示引用了声明文件：
	/// <reference path="./jQuery.d.ts">
	jQuery('#main');
 */

// 第三方声明文件：
/*
	当然，jQuery的声明文件不需要我们定义了，已经有人帮我们定义好了，我们只需要知道怎么引用它们
	我们可以直接下载下来使用，但是更推荐的方式是使用工具统一管理第三方库的声明文件
	社区已经有很多方式引入声明文件，但是TS推荐使用@types来管理
	@types的使用方式很简单，直接使用npm安装对应的声明模块即可，以jQuery为例：
		npm install @types/jquery --save-dev
 */







// 内置对象
/*
	JavaScript中有很多的内置对象，它们可以直接在ts中当做定义好的类型
	内置对象是指根据标准在全局作用域(Global)上存在的对象。这里的标准是指ECMAScript和其他环境(比如DOM)的标准。
 */

// ECMAScript的内置对象：
// ECMAScript提供的内置对象有：Boolean、Error、Date、RegExp等。
// 我们在ts中可以为变量定义为这些类型：
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error Type');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
// 更多内置对象，请查看MDN的文档。

// DOM和BOM的内置对象
/*
	DOM和BOM提供的内置对象有：
		Document，HTMLElement、Event、NodeList等。
 */
// TypeScript中会经常用到这些类型：
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
	// Do Something...
})

// TypeScript核心库的定义文件：
/*
	TypeScript核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在TypeScript中的。
	当你在使用一些常用的方法的时候，TypeScript实际上已经帮你做了很多类型判断的工作了，比如：
		Math.pow(10, '2'); // 报错
 */
// 上面的例子中，Math.pow必须接收两个number类型的参数，事实上Math.pow的类型定义如下：
interface Math {
	/*
		Returns the value of a base expression taken to a specified power.
		@param x The base value of the expression.
		@param y The exponent value of the expression.
	 */
	power(x: number, y: number): number;
}
// 再举一个DOM的例子：
document.addEventListener('click',function (e) {
	console.log(e.targetCurrent); // 报错
})
// 上面的例子中，addEventListener方法是在TypeScript核心库中定义的：
interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
	addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}
// 所以e被推断成了MouseEvent，而MouseEvent是没有targetCurrent属性的，自然会报错。
// 注意：TypeScript核心库的定义中不包括Nodejs的部分。

// 用TypeScript写Nodejs
// Nodejs不是内置对象的一部分，如果想用TypeScript写nodejs，则需要引入第三方声明文件：
// 		npm install @types/node --save-dev








// ***** 第二部分：进阶 *****
/*
	这部分是高级的类型与技术，包括：
		类型别名
		字符串字面量类型
		元组
		枚举
		类
		类与接口
		泛型
		声明合并
		扩展阅读
 */







// 类型别名
// 类型别名用来给类型起一个新名字，简单的例子：
type Name = string;
type NameResolver = () => string; // 在TS的类型定义中， => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。在ES6中是箭头函数，不要混淆两者。(重要的事情说三遍)
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
	if(typeof n === 'string'){
		return n;
	}else {
		return n();
	}
}
// 上例中，我们使用 type 创建类型别名







// 字符串字面量类型
// 字符串字面量类型，用来约束取值只能是某几个字符串中的一个，简单的例子：
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
	// do something...
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'doclick'); // 报错
// 上面的例子中，我们使用type定义了一个字符串字面量类型EventNames，它只能取三种字符串中的一种。
// 注意！类型别名、字符串字面量类型的定义都是使用type定义的。







// 元组
// 数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。
// 元组起源于函数编程语言(如F#)，在这些语言中频繁使用元组。

// 简单的例子：
// 定义一对值分别为string和number的元组：
let xcatliu: [string, number] = ['xCat', 25];
// 当赋值或访问一个已知索引的元素时，会得到正确的类型:
let x: [string, number];
x[0] = 'x';
x[1] = 25;
x[0].slice(1);
x[1].toFixed(2);
// 也可以只赋值其中的一项：
let x2: [string, number];
x2[0] = 'x2';
// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项：
let x3: [string, number];
x3 = ['x3', 24]; // 这里对元组类型的变量进行初始化或者赋值，必须提供所有项
// 如果像下面这样初始化，少提供了项的话，会报错：
let x4: [string, number];
x4 = ['x4']; // 报错
// 下面的代码也同样会报错：
let x5: [string, number];
x5 = ['x5']; // 报错
x5[1] = 23;

// 越界的元素：
// 当赋值给越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
let x6: [string, number];
x6 = ['x6', 22 ];
x6[2] = 'hello world';
// 上面的例子中，第三项满足联合类型 string | number ，不会报错。(书上写错了，在对元组类型的变量进行初始化或者赋值时，必须提供所有项。但是书上直接写了第三个项，会报错)
let x7: [string, number];
x7 = ['x7', 25];
x7.push('hi');
x7.push(true); // 报错，true不是x7元组中每一项元素的类型的联合类型，联合类型为 string | number。
// 当访问一个越界元素，也会识别为元组中每个类型的联合类型：
let x8: [string, number];
x8 = ['x8', 32];
x8[2] = 'vue'; // 'vue'被识别为 string | number 的联合类型
console.log(x8[2].slice(1)); // 报错，之前提到过，如果一个值是联合类型，我们只能访问此联合类型中共有的属性和方法 (number上不存在slice方法)。







// 枚举
// 枚举(Enum)类型用于取值被限定在一定范围内的场景，比如一周只能有7天，颜色限定为红绿蓝等。

// 枚举推荐用enum关键字来定义，简单的例子：
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// 枚举成员会被赋值从0开始递增的数字(不是索引)，同时也会对枚举值到枚举名进行反向映射：
enum Days2 {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days2['Sun'] === 0); // true
console.log(Days2['Tue'] === 2); // true
console.log(Days2['Thu'] === 4); // true
console.log(Days2['Sat'] === 6); // true
console.log(Days2[0] === 'Sun'); // true
console.log(Days2[2] === 'Tue'); // true
console.log(Days2[4] === 'Thu'); // true
console.log(Days2[6] === 'Sat'); // true
// 事实上，上面的例子会被编译为：
var Days3; // (变量名换成Days3，否则变量会冲突报错)
(function (Days3) {
	Days3[Days3['Sun'] = 0] = 'Sun';
	Days3[Days3['Mon'] = 1] = 'Mon';
	Days3[Days3['Tue'] = 2] = 'Tue';
	Days3[Days3['Wed'] = 3] = 'Wed';
	Days3[Days3['Thu'] = 4] = 'Thu';
	Days3[Days3['Fri'] = 5] = 'Fri';
	Days3[Days3['Sat'] = 6] = 'Sat';
})(Days3 || (Days3 = {}))

// 手动赋值：
// 我们也可以给枚举项手动赋值
enum Days4 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days4['Sun'] === 7); // true
console.log(Days4['Mon'] === 1); // true
console.log(Days4['Tue'] === 2); // true
console.log(Days4['Sat'] === 6); // true
// 上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增

// 如果未手动赋值的枚举项和手动赋值的枚举项重复了，TS是不会察觉到这个的：
enum Days5 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days5['Sun'] === 3); // true
console.log(Days5['Wed'] === 3); // true
console.log(Days5[3] === 'Sun'); // false
console.log(Days5[3] === 'Wed'); // true
// 上面的例子中，递增到3的时候与前面的'Sun'重复了，但是TS并没有报错，导致Days5[3]的值原先是'Sun'，然后又被'Wed'覆盖了。编译的结果是：
var Days6;
(function (Days) {
	Days6[Days6['Sun'] = 3] = 'Sun';
	Days6[Days6['Mon'] = 1] = 'Mon';
	Days6[Days6['Tue'] = 2] = 'Tue';
	Days6[Days6['Wed'] = 3] = 'Wed';
	Days6[Days6['Thu'] = 4] = 'Thu';
	Days6[Days6['Fri'] = 5] = 'Fri';
	Days6[Days6['Sat'] = 6] = 'Sat';
})(Days6 || (Days6 = {}))
// 所以使用的时候需要注意，最好不要出现这种覆盖的情况。

// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视检查(编译出的js仍是可用的)：
enum Days7 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
var Days8;
(function (Days) {
	Days6[Days8['Sun'] = 7] = 'Sun';
	Days6[Days8['Mon'] = 8] = 'Mon';
	Days6[Days8['Tue'] = 9] = 'Tue';
	Days6[Days8['Wed'] = 10] = 'Wed';
	Days6[Days8['Thu'] = 11] = 'Thu';
	Days6[Days8['Fri'] = 12] = 'Fri';
	Days6[Days8['Sat'] = 'S'] = 'Sat';
})(Days8 || (Days8 = {}));

// 当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍然为1：
enum Days9 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
console.log(Days9['Sun'] === 7); // true
console.log(Days9['Mon'] === 1.5); // true
console.log(Days9['Tue'] === 2.5); // true
console.log(Days9['Sat'] === 6.5); // true

// 常数项和计算所得项
// 枚举项有两种类型：常数项(constant member)和计算所得项(computed member)
// 前面我们所举的例子都是常数项，下面是一个典型的计算所得项的例子：
enum Color {Red, Green, Blue = 'blue'.length};
// 上面的例子中，'blue'.length就是一个计算所得项
// 上面的例子不会报错，但是如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color2 {Red = 'red'.length, Green, Blue}; // 报错

// 下面是常数项和计算所得项的完整定义
/**
 * 当满足以下条件时，枚举成员被当作是常数：
 * 	1.不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为0。
 * 	2.枚举成员使用常数枚举表达式初始化。常数枚举表达式是TypeScript表达式的子集，它可以再编译阶段求。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
 * 		1).数字字面量
 * 		2).引用之前定义的常数枚举成员(可以是在不同的枚举类型中定义的)。如果这成员是在同一个枚举类型中定义的，可以使用非限定名来引用。
 * 		3).带括号的常数枚举表达式
 * 		4). +，-，~ 一元运算符应用于常数枚表达式
 * 		5). +，-，*，/，%，<<，>>，>>>，&，|，^， 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为NaN或Infinity，则会在编译阶段报错。
 */
// 所有其他情况的枚举成员被当作是需要计算得出的值。

// 常数枚举
// 常数枚举是使用 const enum 定义的枚举类型
const enum Direction {
	Up,
	Down,
	Left,
	Right
}
let directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
// 上例的编译结果是：
var directions2 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// 假如包含了计算成员，则会在编译阶段报错：
const enum Color3 {Red, Green, Blue = 'blue'.length}; // 报错

// 外部枚举
// 外部枚举(Ambient Enums)是使用declare enum定义的枚举类型：
declare enum Directions {
	Up,
	Down,
	Left,
	Right
}
let directions3 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 之前提到过，declare定义的类型只会用于编译时的检查，编译结果中会被删除。
// 上例的编译结果为：
var directions4 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 外部枚举与声明语句一样，常出现在声明文件中。
// 同时使用declare和const 也是可以的：
declare const enum Directions2 {
	Up,
	Down,
	Left,
	Right
}
let directions5 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right];
// 编译结果：
var directions6 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// TypeScript的枚举类型的概念来源于C#。







// 类
/**
 * 传统方法中，JavaScript通过构造函数实现类的概念，通过原型链实现继承。而在ES6中，我们终于迎来了class。
 * TypeScript除了实现了所有ES6中的类功能以外，还添加了一些新的用法。
 * 这一节主要介绍类的用法，下一节再介绍如何定义类的类型。
 */

/**
 * 类的概念
 * 虽然JavaScript中有类的概念，但是可能大多数JavaScript程序员并不是非常熟悉类，这里对类相关的概念做一个简单介绍。
 * 	1.类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
 * 	2.对象(Object)：类的实例，通过new生成
 * 	3.面向对象(OOP)的三大特性：封装、继承、多态
 * 	4.封装(Encapsulation)：将对数据的操作细节隐藏起来，只暴露对外的接口
 * 	5.继承(Inheritance)：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 	6.多态(Polymorpphism)：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如Cat和Dog都继承自Animal，但是分别实现了自己的eat方法。此时针对某一个实例，我们无需了解它是Cat还是Dog，就可以直接调用eat方法，程序会自动判断出来应该如何执行eat
 * 	7.存取器(getter & setter)：用以改变属性的读取和赋值行为
 * 	8.修饰符(Modifiers)：修饰符是一些关键字，用于限定成员或类型的性质。比如public表示公有属性或方法
 * 	9.抽象类(Abstract Class)：抽象类是供其它类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 * 	10.接口(Interfaces)：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现(implements)。一个类只能继承自另一个类，但是可以实现多个接口
 */

// 分别介绍在ES6、ES7、TS中类的用法：
 
// ES6中类的用法 (请查看阮一峰的ESMAScript6 入门 - Class)
// 属性和方法：
// 使用class定义类，使用constructor定义构造函数
// 通过new生成新实例的时候，会自动调用构造函数
class Animal {
	constructor(name){
		this.name = name; // (这里的报错原因：ts强制类中必须声明作用域中已使用的变量)
	}
	sayHi(){
		return `My name is ${this.name}`;
	}
}
let someAnimal = new Animal('Jack');
console.log(someAnimal.sayHi()); // My name is Jack
// 类的继承
// 使用extends关键字实现继承，子类中使用super关键字来调用父类的构造函数和方法
class Cat extends Animal {
	constructor(name){
		super(name); // 调用父类的constructor(name)
		console.log(this.name); // (同上方报错一样)
	}
	sayHi(){
		return 'Meow, ' + super.sayHi(); // 调用父类的sayHi()
	}
}
let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
// 存取器
// 使用getter和setter可以改变属性的赋值和读取行为：
class Animal2 {
	constructor(name){
		this.name = name; // (个人分析：这个类中显示地使用了setter，所以没有声明name，ts也不会报错)
	}
	get name(){
		return 'Jack';
	}
	set name(value){
		console.log('setter: ' + value);
	}
}
let someAnimal2 = new Animal2('Kitty'); // setter: Kitty
someAnimal2.name = 'Tom'; // setter: Tom
console.log(someAnimal2.name); // Jack (因为显示地使用了getter，而且getter永远返回的是Jack)
// 静态方法
// 使用static修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：
class Animal3 {
	static isAnimal(a){
		return a instanceof Animal3;
	}
}
let someAnimal3 = new Animal3();
Animal3.isAnimal(someAnimal3); // true
someAnimal3.isAnimal(someAnimal3); // 报错，TypeError: someAnimal3.isAnimal is not a function

// ES7中类的方法
// ES7中有一些关于类的提案，TypeScrippt也实现了它们，这里做一个简单的介绍

// 实例属性
// ES6中实例的属性只能通过构造函数中的this.xxx来定义，ES7提案中可以直接在类里面定义：
class Animal4 {
	name = 'Jack'; // 这样ts就不会报不存在name的错误了
	constructor(){
		// ...
	}
}
let someAnimal4 = new Animal4();
console.log(someAnimal4.name); // Jack
// 静态属性
// ES7提案中，可以使用static定义一个静态属性：
class Animal5 {
	static num = 42;
	constructor(){
		// ...
	}
}
console.log(Animal5.num); // 42
// (注意：似乎一些内置的关键字或者属性无法使用static定义，比如name。因为类有自己的名字属性，即name)

// TypeScript中类的用法
// public private 和 protected
/**
 * TypeScript可以使用三种访问修饰符(Access Modifiers)，分别是publie、private、protected
 * 	1.public修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
 * 	2.private修饰的属性或方法是私有的，不能再声明它的类的外部访问
 * 	3.protected修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
 */
// 下面举一些例子：
class Animal6 {
	public name;
	public constructor(name){
		this.name = name;
	}
}
let someAnimal6 = new Animal6('Jack');
console.log(someAnimal6.name); // Jack
someAnimal6.name = 'Tom';
console.log(someAnimal6.name); // Tom
// 上面的例子中，name被设置为了public，所以直接访问实例的name属性是允许的
// 很多时候，我们希望有的属性是无法直接存取的，这时候就可以用private了：
class Animal7 {
	private name;
	public constructor(name){
		this.name = name;
	}
}
let someAnimal7 = new Animal7('Jack');
console.log(someAnimal7.name); // Jack 不过在这里ts会报错，Property 'name' is private and only accessible within class 'Animal7'
someAnimal7.name = 'Tom'; // ts会报错，Property 'name' is private and only accessible within class 'Animal7'
// 需要注意的是，TypeScript编译之后的js代码中，并没有限制private属性在外部的可访问性
// 上面例子编译的代码是：
// (使用Animal8是为了防止变量冲突报错)
var Animal8 = (function () {
	function Animal8(name) {
		this.name = name;
	}
	return Animal8;
}());
var someAnimal8 = new Animal8('Jack');
console.log(someAnimal8.name);
someAnimal8.name = 'Tom';
// 使用private修饰的属性或方法，在子类中也是不允许访问的：
class Animal9 {
	private name;
	public constructor(name) {
		this.name = name;
	}
}
class Cat2 extends Animal9 {
	constructor(name){
		super(name);
		console.log(this.name); // ts会报错
	}
}
// 而如果是用protected修饰符，则允许在子类中访问：
class Animal10 {
	protected name;
	public constructor(name) {
		this.name = name;
	}
}
class Cat3 extends Animal10 {
	constructor(name){
		super(name);
		console.log(this.name); // 不会报错
	}
}

// 抽象类
// abstract 用于定义抽象类和其中的抽象方法
// 什么是抽象类？
// 首先，抽象类是不允许被实例化的：
abstract class Animal11 {
	public name;
	public constructor(name) {
		this.name = name;
	}
	public abstract sayHi();
}
let someAnima11 = new Animal11('Jack'); // ts会报错，Cannot create an instance of the abstract class 'Animal11'
// 上面的例子中，我们定义了一个抽象类Animal11，并且定义了一个抽象方法sayHi。在实例化抽象类的时候报错了。
// 其次，抽象类中的抽象方法必须被子类实现：
abstract class Animal12 {
	public name;
	public constructor(name) {
		this.name = name;
	}
	public abstract sayHi();
}
class Cat4 extends Animal12 { // 报错了
	public eat(){
		console.log(`${this.name} is eating.`);
	}
	// 这里没有实现抽象的父类的方法
}
let cat4 = new Cat4('Tom');
// 上面的例子中，我们定义了一个类Cat4继承了抽象类Animal12，但没有实现抽象方法sayHi，所以编译报错了。
// 下面是一个正确使用抽象类的例子：
abstract class Animal13 {
	public name;
	public constructor(name) {
		this.name = name;
	}
	public abstract sayHi();
}
class Cat5 extends Animal13 {
	public sayHi(){
		console.log(`My name is ${this.name}`);
	}
}
let cat5 = new Cat5('Tom');
// 上面的例子中，我们实现了抽象方法sayHi，编译通过了。
// 需要注意的是，即使是抽象方法，TypeScript的编译结果中，仍然会存在这个类，上面的代码的编译结果是：
var _extends = (this && this._extends) || function (d, b){
	for(var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	function _() {this.constructor = d; }
	d.prototype = b === null ? Object.create(b) : (_.prototype = b.prototype, new _());
};
var Animal14 = (function () {
	function Animal14(name){
		this.name = name;
	}
	return Animal14;
}());
var Cat6 = (function (_super) {
	_extends(Cat6, _super);
	function Cat6() {
		_super.apply(this, arguments);
	}
	Cat6.prototype.sayHi = function () {
		console.log('My name is ' + this.name);
	}
	return Cat6;
}(Animal14));
var cat6 = new Cat6('Tom');

// 类的类型
// 给类加上TypeScript的类型很简单，与接口类似：
class Animal15 {
	name: string;
	constructor(name: string){
		this.name = name;
	}
	sayHi(): string{
		return `My name is ${this.name}`;
	}
}
let cat7: Animal15 = new Animal15('Jack');
console.log(cat7.sayHi()); // My name is Jack







// 类与接口
// 之前学习过，接口(Interfaces)可以用于对 [对象的形状(shape)]进行描述。
// 这一章主要介绍接口的另一种用途，对类的一部分行为进行抽象。

/**
 * 类实现接口
 * 
 * 实现(implements)是面向对象中的一个重要概念。
 * 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口(interfaces)，用implements关键字来实现。
 * 这个特性大大提高了面向对象的灵活性。
 * 
 * 举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
 * 这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：
 */
interface Alarm {
	alert();
}
class Door {
}
class SecurityDoor extends Door implements Alarm {
	alert(){
		console.log('SecurityDoor alert');
	}
}
class Car implements Alarm {
	alert(){
		console.log('Car alert');
	}
}
// 一个类可以实现多个接口：
interface Alarm2 {
	alert();
}
interface Light {
	lightOn();
	lightOff();
}
class Car2 implements Alarm2, Light {
	alert(){
		console.log('Car2 alert');
	}
	lightOn(){
		console.log('Car2 light on');
	}
	lightOff(){
		console.log('Car2 light off');
	}
}
// 上例中，Car2实现了Alarm2和Light接口，既能报警，也能开关车灯。

// 接口继承接口
// 接口和接口之间可以是继承关系：
interface Alarm3 {
	alert();
}
interface LightableAlarm extends Alarm3 {
	lightOn();
	lightOff();
}
// 上例中，我们使用extends使LightableAlarm继承Alarm3

// 接口继承类
// 接口也可以继承类：
class Point {
	x: number;
	y: number;
}
interface Ponit3d extends Point {
	z: number;
}
let ponit3d: Ponit3d = {x: 1, y: 2, z: 3};

// 混合类型
// 之前学习过，可以使用接口的方式来定义一个函数需要符合的形状（第408行）：
interface SearchFunc2 {
	(source: string, subString: string): boolean;
}
let mySearch2: SearchFunc2;
mySearch2 = function(source: string, subString: string) {
	return source.search(subString) !== -1;
}
// 有时候，一个函数还可以有自己的属性和方法：
interface Counter {
	(start: number): string;
	interval: number;
	reset(): void;
}
function getCounter(): Counter {
	let counter = <Counter>function (start: number) {};
	counter.interval = 123;
	counter.reset = function () {};
	return counter;
}
let c2 = getCounter();
c2(10);
c2.reset();
c2.interval = 5.0;







// 泛型
// 泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 简单的例子
// 首先，我们来实现一个函数createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：
function createArray(length: number, value: any): Array<any> {
	let result = [];
	for(let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 上例中，我们使用了之前提到的 数组泛型 来定义返回值的类型。
// 这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确地定义返回值的类型：
// Array<any>允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的value的类型。
// 这时候，泛型就派上用场了：
function createArray2<T>(length: number, value: T): Array<T> {
	let result: T[] = [];
	for(let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}
createArray2<string>(3, 'x'); // ['x', 'x', 'x']
// 上例中，我们在函数名后添加了<T>，其中T用来指代任意输入的类型，在后面的输入value：T和输出Array<T>中即可使用了。
// 接着在调用的时候，可以指定它具体的类型为string。当然，也可以不手动指定，而让类型推论自动推算出来：
function createArray3<T>(length: number, value: T): Array<T> {
	let result: T[] = [];
	for(let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}
createArray3(3, 'x'); // ['x', 'x', 'x']

// 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven, 7']
// 上例中，我们定义了一个swap函数，用来交换输入的元组。

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIdentity<T>(arg: T): T {
	console.log(arg.length); // 报错
	return arg;
}
// 上例中，泛型T不一定包含属性length，所以编译的时候报错了。
// 这时，我们可以对泛型进行约束，只允许这个函数传入包含length属性的变量。这就是泛型约束：
interface Lengthwise {
	length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
	console.log(arg.length); // 不会报错
	return arg;
}
// 上例中，我们使用了extends约束了泛型T必须符合接口Lengthwise的形状，也就是包含length属性。
// 此时如果调用了loggingIdentity2的时候，传入的arg不包含length，那么在编译阶段就会报错了：
interface Lengthwise2 {
	length: number;
}
function loggingIdentity3<T extends Lengthwise2>(arg: T): T {
	console.log(arg.length); // 不会报错
	return arg;
}
loggingIdentity3(7); // 报错，数值类型没有length属性

// 多个类型参数之间也可以互相约束：
function copyFields<T extends U, U>(target: T, source: U): T {
	for(let id in source){
		target[id] = (<T>source)[id];
	}
	return target;
}
let newx = { a: 1, b: 2, c: 3, d: 4 };
copyFields(newx, { b: 10, d: 20 });
// 上例中，我们使用了两个类型参数，其中要求T继承U，这样就保证了U上不会出现T中不存在的字段。

// 泛型接口
// 之前学习过，可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc3 {
	(source: string, subString: string): boolean;
}
let mySearch3: SearchFunc3;
mySearch3 = function(source: string, subString: string) {
	return source.search(subString) !== -1;
}
// 当然也可以使用含有泛型的接口来定义函数的形状：
interface CreateArrayFunc {
	<T>(length: number, value: T): Array<T>;
}
let createArray4: CreateArrayFunc;
createArray4 = function<T>(length: number, value: T):Array<T> {
	let result: T[] = [];
	for(let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}
createArray4(3, 'x'); // ['x', 'x', 'x']
// 进一步，我们可以把泛型参数提前到接口名上：
interface CreateArrayFunc2<T> {
	(length: number, value: T): Array<T>;
}
let createArray5: CreateArrayFunc2<any>;
createArray5 = function<T>(length: number, value: T):Array<T> {
	let result: T[] = [];
	for(let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}
createArray5(3, 'x'); // ['x', 'x', 'x']
// 注意：此时在使用泛型接口的时候，需要定义泛型的类型。

// 泛型类
// 与泛型接口类似，泛型也可以用于类型定义中：
class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y };

// 泛型参数的默认类型
// 在TS2.3版本以后，我们可以为泛型中的类型参数指定默认类型。
// 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function createArray6<T = string>(length: number, value: T): Array<T> {
	let result: T[] = [];
	for(let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}







// 声明合并
// 如果定义了两个相同名字的函数、接口、或类，那么它们会合并成一个类型：

// 函数的合并
// 之前学习过，我们可以使用重载定义多个函数类型 (第480行)：
function reverse2(x: number): number; // 如果是number类型就输出number类型
function reverse2(x: string): string; // 如果是string类型就输出string类型
function reverse2(x: number | string): number | string {
	if(typeof x === 'number'){
		return Number(x.toString().split('').reverse().join(''));
	}else if(typeof x === 'string'){
		return x.split('').reverse().join('');
	}
}

// 接口的合并
// 接口中的属性在合并时会简单的合并到一个接口中：
interface Alarm4 {
	price: number;
}
interface Alarm4 {
	weight: number;
}
// 相当于：
interface Alarm4 {
	price: number;
	weight: number;
}
// 注意：合并的属性的类型必须是惟一的：
interface Alarm5 {
	price: number;
}
interface Alarm5 {
	price: number; // 虽然重复了，但是类型都是number，所以不会报错
	weight: number;
}

interface Alarm6 {
	price: number;
}
interface Alarm6 {
	price: string; // 类型不一致，报错
	weight: number;
}
// 接口中方法的合并，和函数的合并一样：
interface Alarm6 {
	price: number;
	alert(s: string): string;
}
interface Alarm6 {
	weight: number;
	alert(s: string, n: number): string;
}
// 相当于：
interface Alarm6 {
	price: number;
	weight: number;
	alert(s: string): string;
	alert(s: string, n: number): string;
}

// 类的合并
// 类的合并与接口的合并规则一致，这里就不写了。







// 扩展阅读：请查看pdf。