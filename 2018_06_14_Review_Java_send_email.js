// // // // Java Script
// // //
// // // // 1.1 출력
// // // console.log('a', 'b');
// // //
// // // // 1.2 식별자
// // // // 상수명: snake_case
// // // // 변수명:camelcase
// // // var Total_count = 50;
// // // var firstName = 'Doojin';
// // //     lastName = 'Park';
// // // console.log(firstName, lastName, Total_count);
// // //
// // // // 1.3 변수선언 및 연산
// // // var a = 1;
// // // var b = 2;
// // // var result = a + b;
// // // console.log(result)
// // //
// // // // 1.4 연산자
// // // // + - * / % ++ --
// // //
// // // // i++;
// // // var i = 2;
// // // i++;
// // // console.log(i);
// // //
// // // i--;
// // // console.log(i);
// // //
// // // console.log(5/3);
// // //
// // // // 1.5 연산자 우선순위
// // // var c, d;
// // // c = 3;
// // // d = 4;
// // // var result = (c-d) * 5;
// // // console.log(result);
// // //
// // // // 1.6 데이터 타입
// // // var a = 1,  // number
// // //     b = 1.9, // number
// // //     c = 'data', // string
// // //     d = [1,2,3], // object
// // //     e = {'a':1, 'b':2}, // object
// // //     f = true, // boolean
// // //     g = false; // boolean
// // //
// // // console.log(typeof a, typeof b, typeof c, typeof d,
// // // typeof e, typeof f, typeof g)
// // //
// // // var a = null,
// // //      asda,
// // //      c = 0/0;
// // // console.log(a,asda,c)
// // //
// // // console.log(1 == 1)
// // // console.log(1 == '1')
// // //
// // // console.log(1 === 1)
// // // console.log(1 === '1')
// // //
// // // var arr = ['a', 'b', 'c', 'd', 'e'];
// // // arr.push('f')
// // // console.log(arr)
// // // arr.push('Jay')
// // // console.log(arr)
// // // arr.unshift('Jay')
// // // console.log(arr)
// // // arr.shift()
// // // console.log(arr)
// // // arr.shift()
// // // console.log(arr)
// // // arr.pop()
// // // console.log(arr)
// // // arr.reverse()
// // // console.log(arr)
// // // arr.sort()
// // // console.log(arr)
// // //
// // // arr.sort()
// // //
// // // var obj = {};
// // // obj.math = 92;
// // // obj.english = 97;
// // // obj.science = 85;
// // // console.log(obj);
// // // console.log(obj.english);
// // //
// // //
// // // // 객체에 함수 담기
// // // // Object.keys: 객체의 키값 리스트로 가져오기
// // // // toFixed(number); 반올림해서 number 자리수까지 출력
// // //
// // // var pointsObj = {
// // //     'points':{'math': 91, 'science': 98, 'english': 86},
// // //     'total': function(){
// // //         var total = 0;
// // //         for (var key in this.points){
// // //             total += this.points[key];
// // //         }
// // //
// // //         return total;
// // //     },
// // //
// // //     'avg': function(){
// // //         return this.total() / Object.keys(this.points).length;
// // //
// // //     }
// // // };
// // //
// // // console.log(pointsObj.total())
// // // console.log(pointsObj.avg())
// // // console.log(pointsObj.avg().toFixed(2))
// // //
// // // // 7. Scope
// // //
// // // var a = 'hello';
// // // function func(){
// // //     console.log(a);
// // // }
// // //
// // // func();
// // //
// // // var a = 'hello';
// // // function func(){
// // //     var a = 'javascripts'
// // //     console.log('inner', a);
// // // }
// // // func();
// // //
// // // console.log('outer', a)
// // //
// // // // 익명함수: 모든 코드를 익명함수 안에서 처리한다.
// // function add(a, b, callback){
// //      var result = a + b;
// //      callback(result);
// // }
// //
// // function disp(data){
// //     console.log(data);
// // }
// //
// // add(5, 8, disp);
//
// function add(a, b){
//     return a + b;
// }
//
// var result = add(3,4);
// console.log(result)
//
// var add = function(a,b){
//     return a + b;
// };
//
// var result = add(3,5);
// console.log(result);
// console.log(typeof add);
//
// var a = 0;
// while(a<5){
//     a++;
//     console.log(a);
// };
//
// for(var i=0; i<3; i++){
//     console.log(i);
// }
//
// var a = 0;
// while(a<5){
//     a++;
//     if( a===4){
//         break;
//     }
//
//     console.log(a);
// }
//
// var a = 0;
// while(a<5){
//     a++;
//     if( a===1){
//         continue;
//     }
//     console.log(a)
// }
//
// // 구구단 가로 (for, while)
// for(var num1=2; num1<10; num1++){
//     for(var num2=1; num2<10; num2++){
//         console.log(num1 + '*' + num2 + '=' +num1*num2)
//     }
//
//     console.log();
// }
//
// // 구구단 세로 (for, while)
// // 줄바꿈 안되게 출력
// for(var num2 = 1; num2<10; num2++){
//     for(var num1 = 2; num1<10; num1++){
//         process.stdout.write(num1 +'*' + num2 + '=' + num1*num2 + '\t');
//
//     }
//
//     console.log();
// }
//
// var arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr[2])
// console.log(arr.length)
// arr.push('Jay is the Best');
// arr.unshift('Jay is the Best');
// console.log(arr);
//
// arr.pop('Jay is the Best')
// arr.shift('Jay is the Best')
// console.log(arr);
//
// arr.reverse()
// console.log(arr)
//
// arr.sort()
// console.log(arr)
//
// delete arr[2];
// console.log(arr, arr.length)
//
// for(var i=0; i< arr.length; i++){
//     console.log(arr[i])
// }
//
// var obj ={};
// obj.math = 92;
// obj.english = 91;
// obj.science = 94;
//
// console.log(obj)
// console.log(obj.math);
//
// for(var key in obj){
//     console.log(key, obj[key]);
// }
//
// // 객체에 함수 담기
// // Object.keys: 객체의 키값 리스트로 가져오기
// // toFixed(number): 반올림해서 number 자리수까지 출력
//
// var object = {
//     'points': {'math':91, 'english':98, 'Korean':94},
//     'total' : function(){
//         var total = 0;
//         for (var key in this.points){
//             total += this.points[key];
//         }
//
//         return total;
//     },
//     'avg':function(){
//         return this.total() / Object.keys(this.points).length;
//     }
//
// };
//
// from selenium import webdr
//
// console.log(object.total());
// console.log(object.avg());
// console.log(object.avg().toFixed(2))
//
// //  scope - 스코프
// // 함수 밖에서 선언된 변수를 함수 안에서 사용
// var a = 'Jay'
// function func(){
//     console.log(a);
// }
//
// func();
//
// //   함수 안에서 var 를 사용해서 선언
// var a = 'hello';
// function func(){
//     var a = 'javascripts';
//     console.log('inner', a)
// }
// func();
// console.log('outer', a);
//
// // 함수 안에서 var를 사용하지 않고 선언
// var a = 'hello';
// function func(){
//     a = 'javascript';
//     console.log('inner', a)
// }
//
// func();
// console.log('outer',a);
//
// //  전역 변수를 사용하지 않는 방법
// // 익명함수: 모든 코드를 익명함수 안에서 처리한다.
// (function(){
//     var a= 'hello';
//     console.log(a);
// }());
// console.log(a)
//
// // callback 함수
// // 함수내에서 모든 동작이 끝나고 실행시키는
// // 함수를 파라미터로 ㅈ넘겨서 사용하는 방법
// // 웹에서 비동기 통신을 할 때 많이 사용됨
// //
// // function add(a, b, callback){
// //     var result = a + b;
// //     callback(result);
// // }
// //
// // function disp(data){
// //     console.log(data);
// // }
// //
// // add(5,8,disp);
//
// function add(a, b, callback){
//     var result = a + b;
//     callback(result);
// }
// function disp(data){
//     console.log(data);
// }
// add(5, 8, disp);

//
// for(var num1=2; num1<10; num1++){
//     for(var num2=1; num2<10; num2++){
//         console.log(num1 + "*" + num2 + "=" + num1*num2 + '\t');
//     }
// }
//
// function add(a, b, callback){
//     var result = a + b;
//     callback(result);
//     }
// function disp(data){
//     console.log(data);
// }
// add(5, 8, disp);


var a = 0;
while(var a; a < 5; a++){
    console.log(a);
};
