// const circle = {radius: 20, square: function() {
//         return 3.14 * (this.radius ** 2)
// }, perimeter: () => 2 * 3.14 * this.radius,
// toString: function(){
//         return `radious of this circle is ${this.radius}`
// }};
// console.log(`square=${circle.square()}, perimeter=${circle.perimeter()}`); 
//circle.square will be converted to square(circle) where circle as argument value,
// "this" is the hidden parameter in the function 
// in any arrow function there is no "this"
// function square(circle) {
//         return 3.14 * (circle.radius ** 2);
// }
// console.log(`circle: ${circle}`)
// const circle1 = {radius: 20,  perimeter: function() {
//                 return 2 * 3.14 * this.radius}
//         ,
//         toString: function(){
//                 return `radious of this circle is ${this.radius}`
//         }};
//         //circle1.square(); error because the method square is not defined inside object circle1
//         function Circle(radius) {
//                 this.radius = radius;
//         }
//         Circle.prototype.square = function() {
//                 return 3.14 * (this.radius ** 2);  
//         }
//         Circle.prototype.perimeter = function() {
//                 return 2 * 3.14 * this.radius
//         }
//         Circle.prototype.toString = function() {
//                 return `radius of this circle is ${this.radius}`
//         }
//         const circle10 = new Circle(10);
        /*******************************************************HW #16 definition task 1 */
//Write constructor Deferred
        //         const d = new Deferred()
// d.then(function(res){ console.log('1 ', res); return 'a'; });

// d.then(function(res){ console.log('2 ', res); return 'b'; });

// d.then(function(res){ console.log('3 ', res); return 'c'; });
// d.resolve('hello');
//Output: 
//1 hello
//2 a
//3 b
/********************************************************* */
/*******************************************HW #16 definition task2 */
//write constructor MyArray
//const myArray = new MyArray(10);
//myArray.get(index) - result 10
//write method get getting an index value and returning common value
// (set in constructor)
//myArray.set(index, value); 
//write method set that sets a given value at a given index
//myArray.setValue(value) - sets new value in all elements of myArray
//Example:
// const myArray = new MyArray(10);
// console.log(myArray.get(100)) // displayed out 10
// myArray.set(100, 500)//sets 500 at index 100
// console.log(myArray.get(200)) //displayed out 10
// console.log(myArray.get(100)) //displayed out 500
// myArray.setValue(300);
// console.log(myArray.get(100)) //displayed out 300
// console.log(myArray.get(200)) //displayed out 300

/***************************************************************************** */
// Array.prototype.filter = function(callbackPredicate) {
//         console.log('Tel-Ran copyright')
//         const res = []
//        this.forEach((n, i, a) => callbackPredicate(n, i, a) && res.push(n));
//        return res;
// }
// const ar = [1, 2, 4, 5, 100];
// ar.filter(n => n % 2 !== 0).forEach(n => console.log(n));

/*****************************************************HW #16 solution task 1*/
function Deferred() {
    this.functions = []
};
Deferred.prototype.then = function(thenFn) {
    this.functions.push(thenFn);
}
Deferred.prototype.resolve = function(res) {
    this.functions.forEach(fn => res = fn(res));

}
     const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');
/***********************************************************HW #16 solution task 2 */
function MyArray(initialValue) {
    this.value = initialValue; //common value
    this.array = []; //values at the indexes
}
MyArray.prototype.setValue = function(value) {
    this.value = value;
  this.array = [];
}
MyArray.prototype.set = function(index, value) {
    this.array[index] = value;
}
MyArray.prototype.get = function(index) {
    return this.array[index] ?? this.value; // if this.array[index] either undefined or null returns this.value
}



const myArray = new MyArray(10);
console.log("should be 10",myArray.get(100)) // displayed out 10
myArray.set(100, 500)//sets 500 at index 100
console.log("should be 10",myArray.get(200)) //displayed out 10
console.log("should be 500",myArray.get(100)) //displayed out 500
myArray.setValue(300);
console.log("should be 300",myArray.get(100)) //displayed out 300
console.log("should be 300",myArray.get(200)) //displayed out 300
myArray.set(20, 0);
console.log("should be 0",myArray.get(20)) //displayed out 300
/******************************************************************* */
// how to get array's length
const arr1 = [];
arr1[100000000] = 10;
arr1.length = 0;
// console.log(`length of arr1 is ${arr1.length}`);
// arr1.length = 0;
// console.log(arr1[100000000]);
Array.prototype.toString = function() {
    return "[object, Object]"
}
const arr3 = [];