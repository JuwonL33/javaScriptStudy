'use strict';
// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classes (언어 구현 사항 디테일)
// - introduced in ES6 => 클래스가 도입되기 전에는, 클래스를 정의하지 않고 오브젝트를 만들 수 있었음. function을 이용했었음. 
// - sysntactical sugar over prototype-based inheritance => 프로토타입 기반으로 '문법적인 클래스'만 추가됨.

// Class
// 연관있는 함수, 변수, 혹은 함수와 변수가 묶여있는 컨테이너의 개념
// class { 1. fields 2. methods }
// 안에서 보여지는 함수와 밖에서만 볼 수 있는 함수를 나누어서 incapsulation이라고 함. (캡슐화) => 상속, 다양성 가능. => 객체지향언어의 특징.
// 1. template = 청사진, 붕어빵 틀
// 2. declare
// 3. no data in => 메모리에 안 올라감. 


// Object
// 1. instance of a class => 클래스 안에 데이터를 채운 것.
// 2. created many times => 많이 만들 수 있음. 
// 3. data in => 메모리에 올라감.


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name} : hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter => 이해가 완전히 안 되었음.
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        //if(value < 0){
        //    throw Error('age can not be negative');
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

// 캡슐화 하는 이유
// 커피머신에 들어가는 param 1. 커피잔수 2. 돈 3. 커피 만들기
// 이때 1. 커피 잔 수를 -1로 설정하면? => 안됨
// getter를 거지같이 줘도 setter를 기똥차게 설정해놓으면 됨. => 그래서 getter, setter를 만드는 거임.
// 이때 setter를 아무나 다 설정할 수 있게 해놓으면? => 안됨 . 그래서 private으로 두는 것임.



// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 너무 최근에 추가된 기능이어서 개발자들이 사용하지 않음.

class Experiment {
    publicField = 2; // 외부 접근 가능
    #privateField = 0; // 클래스 내부에서만 값이 보여짐. 변경, 사용 가능. 클래스 내부에서는 보이지 않음.
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // publicField는 자동 완성이 되는 반면 Private은 자동 완성으로도 안 보임.


// 4. Static properties and methods
// Too Soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.articleNumber);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // Undefined 출력
console.log(Article.publisher); // 오브젝트마다 딸려있는 변수가 아니라, 클래스 자체에서 공용으로 사용하는 변수 => static
Article.printPublisher(); // 들어오는 데이터에 상관없이 공용으로 사용하는 것들.


// class => 공통점 모으기.
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

// 특정 클래스를 extends 하는 순간 상속받은 클래스의 모든 걸 가져다 쓸 수 있음.
class Rectangle extends Shape {
}
class Triangle extends Shape {
    draw(){ // triangle에서 이 함수 호출하면, 부모 클래스에서 만든 draw() 함수는 더 이상 호출되지 않음. 부모 함수 호출하고 싶으면
        super.draw(); // super.draw() 부모의 함수를 이런 식으로 호출하면 됨.
        console.log('⚠️')
        
    }

    getArea(){  // Overiding : 재정의
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle : color : ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
triangle.toString();

// 6. Class checking : instanceOf
// 왼쪽의 오브젝트가 오른쪽의 클래스의 인스턴스 인지 아닌지 확인하는 함수.
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T . JS의 모든 Object는 이 Objec Class를 상속 받았음. 

// javascript MDN Referrence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference