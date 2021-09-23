// 1. String concatenation

console.log('my' + ' cat'); // 문자열 + 문자열 = 새로운 문자열
console.log('1' + 2); // 문자열 + 숫자 = 문자열 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 변수값 계산 후 스트링으로 변결

console.log("Ellie's \nbook"); // '을 표시하고 싶으면 앞에 역슬래쉬 표시, 개행문자 -> \n


// 2. Nemeric operators
console.log(1+2); // add
console.log(2-1); // substract
console.log(2/1); // divide
console.log(2*1); // multiply
console.log(5%2); // remainder
console.log(2**3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
// preIncrement = 3;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
// preDecrement = 3;
// counter = 3;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);


const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
// postDecrement = 3;
// counter = 2;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x /= y; // x = x / y;


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators; || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;
    
    // || (or), finds the first truthy value -> 처음으로 true를 만나면 일단 멈춘다.
    console.log(`or: ${value1 || value2 || check()}`);
    function check(){   // computation이 커다란 함수를 맨 앞에 두는 것은 코드지적질 당할 수 있음. or일땐 심플한 값을 앞에 두고 값들이 모두 false일때만 복잡한 계산 하게끔 배치하는게 효율.
        for (let i = 0; i<10; i++) {
            //wasting time
            console.log('으악');
        }
        return true;
    }

    // && (and), finds the first falsy value -> 처음으로 false 만나면 일단 실행 안함 
    console.log(`and: ${value1 && value2 && check2()}`); // and 연산자 역시 헤비한 계산하는 함수는 맨 뒤에 배치하는 게 효율적.

    let nullableObject = {something:'메롱'};
    // often used to compress log if-statement
    // nullableObject && nullableObject.something -> object가 null이 아닐때에만 object안에 있는 something을 받아옴.
    if (nullableObject != null){
        nullableObject.something;
    }

    function check2(){
        for (let i = 0; i<10; i++){
            //wasting time
            console.log('으아아악');
        }
        return true;
    }

    // ! (not) -> 값을 반대로 바꿔줌.
    console.log(!value1);



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion -> 타입을 변경해서 변경하기 때문에 string 5 == number 5라고 인식
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion -> 타입까지 일치해야 같은 값으로 인식.
// 타입검사할때 왠만하면 strict equality를 사용할 것.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// object 타입은 메모리에 탑재될 때 reference 형태로 탑재 됨. 
// 값이 같다고 해서 true가 아님, reference가 같아야 true 출력.
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(`ellie1 == ellie2 : ${ellie1 == ellie2}`);
console.log(`ellie1 === ellie2 : ${ellie1 === ellie2}`);
console.log(`ellie1 === ellie3 : ${ellie1 === ellie3}`);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

 

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}



// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');



// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TypeScript -> 다양한 타입 확인할 땐 TypeScript 사용
// if, else가 여러번 반복되면 switch 사용 권장
const browser = 'IE';
switch (browser){
    case 'IE' : 
        console.log('go away!');
        break;
    case 'Chrome' : 
    case 'Firfox' : 
        console.log('love you too!');
        break;
// case 'Chrome' : 
// console.log('love you!');
// break;
// case 'Firfox' : 
// console.log('love you too!');
// break;
    default : 
        console.log('same all!');
        break;

    }


// 11. Loops
// while loop, while the condition is truthy, (값이 false로 나오기 전까진 무한대로 while 실행.)
// body code is execute.
// 조건문 먼저 실행하고 싶으면 while
let i = 3;
while (i>0){
    console.log(`while : ${i}`);
    i--;
}


// do while loop, body code is executed first,
// then check the condition.
// 블럭 먼저 실행하고 싶으면 do while
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);


// for loop, for(begin; condition; step) -> begin을 한번만 실행, condition 확인 후 2,3 컨디션 안맞을때까지 실행
for (i = 3; i>0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){ // for문 안에 지역변수를 선언해서 작성해도 됨.
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops -> O(n^2) -> 시간복잡도는 좋지 않음.
for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// break : 지금 멈춘다
// continue : 지금 것을 스킵함

// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (i = 0; i<=10; i++){
    if(i%2 === 0){
        console.log(`Q1. ${i}`);
    }
}

// Q2. ierate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i<10; i++){
    if(i<9){
        console.log(i);
    }else{break;}
}