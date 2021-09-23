// Whole-script strict mode syntax
// Type-Script말고 JavaScript 사용할땐 맨 위에 'use strict' 를 선언해주는게 좋다.
// why? 
// JavaScript is very flexible BUT
// flexible === dangerous (javascript는 유연한 만큼 개발자가 실수하기 쉬움.)
// 'use strict'는 ECMA Script 5에 추가된 개념으로서 해당 use strict를 선언하게 되면
// 에러에 대한 표시를 console에 표시해줌. 
'use strict';

// 2. Variable
// 변수 : 변경될 수 있는 값.
// let (added in ES6)


// 3. Constants, r (read Only) => 한번 값이 정해지면 절대 바뀌지 않음.
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : premitive types, frozen objects
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons : 
// - Security
// - thread safety
// - reduce human mistake

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive (더 이상 나눠질 수 없음) - number, string, boolean, null, undefined, symbol
// objective (싱글 아이템을 여러개 뭉쳐서 한 박스로 관리)

const ellie = {name:}

// function, first-class function -> function을 데이터 타입으로 사용 가능. return type, parameter type으로 사용 가능.

let a = 12;
let b = 12.34;
console.log(typeof(a));
console.log(typeof(b));

// number - 특별한 숫자 값들 : 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't ues it yet)
const bigInt = 123871248913749812739821379184791823790; // over (-2**53 ~ 2**53)

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value : ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, Nan, ''
// true : false가 아닌 모든 값
const canRead = true;
const test = 3<1;// false

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// 다이나믹 타이핑
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '5';
console.log(`value: ${text}, type: ${typeof text}`);