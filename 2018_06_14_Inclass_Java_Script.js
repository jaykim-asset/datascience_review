// // 한줄 주석
//
// /*
// 여러줄 주석
// */
//
// // 출력
// console.log("dss");
//
// // 식별자
// // 상수: SNAKE_CASE (대문자 스네이크 케이스)
// // 변수명: camelCase (카멜 케이스)
// // 모듈: Pascal Case (파스칼 케이스)
// // 파이썬의 식별자 특수기호: _
// // 자바스크립트는 : $, _
// // _name: private variable, function
// // $target: selector를 변수로 사양할 때


// var name = 'Jay'; // 변수라는 것을 알리기위해 var 넣어야함.
// console.log(name);
//
// var a = 1;
// var b = 2;
// console.log(a+b);
//
// console.log(a+b, typeof a) // 숫자의 type은 number임
//
// // 연산자
// // +, -, *, /, %, ++, --
// // ++ 1을 증가시키는 역할 (앞에 올수도 있고 뒤에도 올수 있음)
// // -- 1을 감소시키는 역할()
//
// var number = 5;
// var result = number ++;
// console.log(number, result); // number: 6, result:5
//
// var number = 5;
// var result = ++ number;
// console.log(number, result); // number: 6, result: 6
//
// // 데이터 타입
// var a = 1;      // Number
// var b = 1.9;    // Number
// var c = 'data'; // String
// var d = [1,2,3]; // Object
// var e = {a:1, b:2}; // Object
// var f = true; // Boolean
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f)
//
// // null, undefined, NaN
// // null: 값이 없음을 지정
// // undefined: 값이 지정되지 않음
// // NaN: 존재하지 않는 데이터의 형태
//
// var a = null;
// console.log(a);     // null
//
// var b;
// console.log(b);     // undefined
//
// var c = 0/0;
// console.log(c);     // NaN
//
//
// // 비교연산자
// >, <, >=, <=, !=, !==, ==, ===
// 결론은 무조건 === 쓰세요.

// // ==은 데이터 값만 비교
// console.log(1 == 1); // True
// console.log(1 == '1'); // True
//
// // ===은 데이터 값과 데이터 타입 모두 비교합니다.
// console.log(1 === 1); // True
// console.log(1 === '1'); // False
//
// // NaN
// // 비교연산을 사용하지 않습니다.
// // 비교연산에서 NaN이 한번이라도 언급되면 무조건 False를 리턴합니다.
// console.log(NaN === NaN);
//
// // 할당연산자
// // +=, -=, *=, /=, %= ...
// var a = 1;
// a += 2;
// console.log(a);
//
// // 논리연산자
// // &&(and), ||(or)
// console.log(true && false); // true
// console.log(true || false); // false
//
// // 조건문
// if(false){
//     console.log('hello');
// }else if(true){
//     console.log('dss');
// }
// else{
//     console.log('world');
// }
//
// // false로 간주되는 데이터의
// // null, undefined, NaN, 0, ''
//
// // true로 간주되는 데이터
// // [], {}
//
// // 문제 1. 점수를 입력하면 학점이 출력 되는 코드를 작성
//
// var point = 88;
// var result = null;
// // To Do: if, else if, else
// // 결과가 A, B, C, D, F로 나오면 됩니다.
// if(point >= 90 & point <= 100){
//     result = 'A'
// }else if(point >= 80){
//     result = 'B'
// }else if(point >= 70){
//     result = 'C'
// }else if(point >= 60){
//     result = 'D'
// }else{
//     result = 'F'
// }
// console.log(result)
//
// // 반복문
// // while, for, do while
// var a = 10;
// while(true){
//     a ++;
//     if(a > 15){
//         break;
//     }
//     console.log(a)
// }
//
//
// var a = 10;
// while(true){
//     a ++;
//     if(a ===12){
//         continue;
//     }
//     if(a > 15){
//         break;
//     }
//     console.log(a)
// } // 12가 찍히지 않음
//
//
// // for(초기값;조건;변수값 변경)
// var i = 0;
// for(i; i<3; i++){
//     console.log(i);
// }
//
// // 배역
// var arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr[2]);
// console.log(arr.length);
// arr.push('f'); // ptyhon - append (push)
// console.log(arr);
// arr.unshift('z'); // python - 맨앞에 append (unshift)
// console.log(arr);
//
// var result = arr.pop();
// console.log(arr, result);
//
// var result = arr.splice(2,1); // 2번에서 1개 짜르기
// console.log(arr, result)
//
// var result = arr.splice(2,3); // 2번에서 3개 짜르기
// console.log(arr, result)
//
//
//
// // 객체 - Object
// var obj = {};
// obj.name = 'jay';
// obj['Family_Name'] = 'kim';
// console.log(obj);
//
// for(var key in obj){
//     console.log(key, obj[key])
// }
//
//
// var user = {
//     name: 'jay',
//     age: 21,
//     addr: 'seoul',
//
//     skill: function(){
//         console.log('coding');
//     }
//
// }
//
// // OOP - 추상화, 캡슐화
// var Module = Module || {};
// (function(_Module){
//     var _name = 'jay';
//
//     _Module.getName = function(){
//         return _name;
//     };
//
//     _Module.setName = function(){
//         _name = name;
//     };
// })(Module);
//
// console.log(Module.getName());

// 함수 function()
// 호이스팅 - hoisting
function sum(num1, num2){
    return num1 + num2;
}
var result = sum(1,2)
console.log(result)

var minus = function(num1, num2){
    return num1 - num2;
};

var result_1 = minus(2,1)
console.log(result_1)


// 스코프 (( Global, loval))

// global 변수
var a = 'dss1';
function disp(){
    a = 'dss2'
    console.log(a);

}
disp();
console.log(a);

// local 변수에는 var 붙인다
var a = 'dss1';
function disp(){
    var a = 'dss2'
    console.log(a);

}
disp();
console.log(a);

// 즉시실행함수, 익명함수
// 자바 스크립트는 프론트엔드 언어입니다.
// 프론트엔드 언어는 코드가 다 노출 됩니다.
// 여러분이 브라우져에서 함수를 마음대로 가져다가 쓸수 잇습니다.
// 이를 방지 하기 위해 즉시실행함수, 익명함수를 사용합니다/
// 문자열 사용시 ''를 이용해주세요. 이유는 html과 함께 많이 사용하기 때문입니다.
// html에서 ""를 사용하기 때문에 '' 를 사용해줘야 에러를 줄일 수 잇ㅅ브니다.

(function(){
    var name = 'jay';
    var disp = function(){
        console.log(name);
    };
    disp();
})();


// callback
// 콜백함수 - 함수의 argument로 함수를 받아서 모든 코드를 실행한 후에
// argument로 받은 함수를 실행
function getData(callback, num1, num2){
    var result = num1 + num2;   // code
    callback(result);           // 코드가 끝나고 특정 함수를 실행
}

function disp(result){
    console.log(result);
}

function sqrt(result){
    console.log(result * result);
}

getData(disp, 2, 3);
getData(sqrt, 2, 3);


// 클로져(팩토리패턴 객체 생성), 프로토타입, es6 문법
