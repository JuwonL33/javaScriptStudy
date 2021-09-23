// JavaScript도 Procedure Function 중 하나 === sub-program
// function은 input, output, 이름이 중요. (이름만 보고도 기능 유추 할 수 있게)

// Function
// - fundamental building block in the program (프로그램을 구성하는 기본적인 빌딩 블록)
// - subprogram (서브 프로그램, 재사용 가능)
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return;}
// one function === one thing => 하나의 함수는 한 가지 일만.
// naming : doSomething, command, verb => 명령, 동사 형으로 지정. (함수 이름을 정하기 어렵다면 한 함수에 두 개 이상의 일을 하지 않는지 고민하기)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello!');
log(1234);

// js는 타입을 따로 명시하지 않기 때문에 TypeScript Playground에 들어가서 JavaScript를 TypeScript로 변환해서 라이브하는 게 안전
// javascript만 사용해서, boolean타입인데 number형으로 파라미터 받아버리면 API날아감...

// Type Script Example
//function log(message:string) : number{
//     console.log(message);
//    return 0;
// }

// JS 다 끝나고 TypeScript 꼭 배우길 권함


// 2. Parameters
// premitive parameters : passed by value (값이 전달)
// object parameters : passed by reference (주소 전달)

function changeName(obj){
    obj.name = 'coder';
}

const ellie = { name : 'ellie' };
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    // 파라미터가 2개인데 한 개만 들어왔을 때, 예전이라면 if문 사용해서 일일히 지정해줘야 했는데, 
    // ES6부터는 파라미터에 아예 지정 가능. 
    //if(from === undefined){
    //    from = 'unknown';
    //}
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameteres (added in ES6) => 배열 형태로 전달
// ...으로 시작하면 배열 파라미터.
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 간단 버전
    for (const arg of args){
        console.log(arg);
    }

    // 더어 간단버전
    args.forEach((arg) => console.log(arg));
}
printAll('juwon', 'lee', 'genius');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'boom!';
    }
    // console.log(childMessage);
    // 중첩된 함수에서 자식함수 -> 부모함수 접근이 가능한 것이 클로저. (이건 다음 시간에)
}
printMessage();

// 6. Return a value => return type이 명시되지 않은 함수는 모두 return undefined이 생략된 것이라고 이해하면 됨.
function sum(a, b){
    return a + b;
}

const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit => 코드 지적질
// bad
function upgradeUser(user){
    if (user.point > 10) {
        // user라는 오브젝트를 받아서 user안에 point가 10을 초과할때...
        // 조건이 맞을 때 명령어 실행하는 것 => 비추
        // long upgrade logic...
    }
}
// good
function upgradeUser2(user){
    if (user.point <= 10){
        return;
    }
    // 조건이 안 맞으면 빨리 종료 시키기 => 추천
    // 조건이 맞을 때만 실행할 함수 쓰기.
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable. (다른 변수들 처럼 값 할당 가능)
// can be passed as an argument to other functions. (다른 변수에 파라미터로 사용 가능.)
// can be returned by another function (함수의 리턴값으로도 사용.)

// 1. Function expression => 함수 선언과 동시에 const에 할당 가능.
// a function declaration can be called earlier than it is defined. (hoisted) => 함수가 선언되기 이전에 호출해도 실행됨.
// JS Engine이 선언된 것을 가장 먼저 위로 올려주는 속성 때문이다. 

const print = function () { // anonymous function => 이름없이 필요한 부분만 작성
    console.log('print');
};
 
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
// 또 다른 함수를 파라미터로 받아, 상황에 맞을 때 전달 받은 함수를 호출하는 함수
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces => 디버깅할때 함수 이름이 스택 트레이스에 찍혀서 나옴.
// recursions (함수 안에서 계속 자신을 부르는 함수... 프로그램 죽어요... call stack이 꽉차게 되어버림.) 
const printNo = function print(){
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// long version
const simplePrint = function () {
    console.log('simplePrint');
}

// arrow function
const simplePrint2 = () => console.log('simplePrint');

//const add = function(a,b) { console.log(a+b);}
//const add = (a,b) => a+b;

const simpleMultipy = (a,b) => { // 2줄 이상일 때
    // do something more
    return a * b;
};


// IIFE : Immediately Invoked Function Expression => 선언과 동시에 호출하고 싶을 때 function을 괄호로 감싸기!
(function hello(){
    console.log('IIFE');
})();


// Fun Quize time😍
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder)

const add1 = (a,b) => console.log(`add1 : ${a+b}`);
const substract = (a,b) => console.log(`substract : ${a-b}`);
const divide = (a,b) => console.log(a/b);
const multiply = (a,b) => console.log(a*b);
const remainder = (a,b) => console.log(a%b);

function calculate(command = 'add1', a, b){
    switch (command){
        case 'add1' :
            add1(a,b);
        case 'substract' :
            substract(a,b);
        case 'divide' :
            divide(a,b);
        case 'multiply' :
            multiply(a,b);
        case 'remainder' :
            remainder(a,b);
    }
}

calculate('substract', 3, 9);