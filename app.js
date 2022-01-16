// console.log('Hello world');
// //output for var 3 3 3
// // for (var i = 0; i<3;i++){
// //     setTimeout(function(){
// //         console.log(i);
// //     })
// // }

// // for (let i = 0; i<3;i++){
// //     setTimeout(function(){
// //         console.log(i);
// //     })
// // }

// // const fun = function(a,b){
// //     return a + b;
// // }
// //let a = 5;
// // console.log(a**2); // результат 25, возвежение в квадрат
// // console.log(fun(10,20)); // сумирование , результат 30
// // console.log(a(10,20)); // error
// // console.log (fun**2); // NaN
// console.log('12' + 12); // результат 1212
// console.log('12'- 12); // rezult 0.
// console.log('ab' - 12);//NaN
// console.log(+'12' + 12);
// console.log('12' + 12 , "'12'+12");
// console.log(`+'12' + 12 = ${+'12' + 12}`);
console.log('*****Task # 1*****');
const a = 'a';
const s = 'S';

console.log( a + a/s + a + s);

console.log('*****Task # 2*****');
let x = 3;
let y = 5;
var oper;
const fun = function (x,y, oper) {
       switch (oper){
           case '+' : return console.log(`${x} + ${y} =`, x+y);
           case '-' : return console.log(`${x} - ${y} =`, x-y); 
           case '*' : return console.log(`${x} * ${y} =`, x*y);
           case "/" : if (y != 0)  return console.log(`${x} / ${y} =`, x/y);
                      else console.log ('Error, cannot be divided by 0');      
       }
};
let result = fun(x,y,'/');


console.log('*****Task # 3*****');
const func = function (f){
            return function (q,w){
                return q*w;
            }
};
console.log(func(5)(10,3));
