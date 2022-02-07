class Person {
    #id;
    #name;
    constructor(id, name) {
            this.#id = id;
            this.#name = name
    }
    getId() {
            return this.#id;
    }
    getName() {
            return this.#name
    }
    toString() {
            return `id: ${this.#id}; name: ${this.#name};`
    }
}
const person = new Person(123, 'Moshe');
//console.log(`person is ${person}`)
class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
            super(id, name); //call the constructor of the class Person
            this.#salary = salary;
    }
    computeSalary() {
            return this.#salary
    }
    toString() {
            return super.toString() + ` salary: ${this.computeSalary()}`
    }
}
const person2 = new Employee(124, "Sara", 5000);
// console.log(`person2 is ${person2}`)
// console.log(typeof(person2)) // just object
// console.log(person2.constructor.name) // only this way JS allow getting constructor name
class Child extends Person {
    #kindergarten
    constructor(id, name, kindergarten) {
         super(id, name);
         this.#kindergarten = kindergarten   
    }
    getKindergarten() {
            return this.#kindergarten;
    }
    toString() {
            return `${super.toString()} kindergarten: ${this.#kindergarten}`
    }
}
const person3 = new Child(125, 'Yakob', 'Shalom');
//console.log(`person3 is ${person3}`)

class WageEmployee extends Employee {
    #hours
    #wage
    constructor(id, name, salary, hours, wage) {
            super(id, name, salary)
            this.#hours = hours;
            this.#wage = wage;
    }
    computeSalary() {
            return super.computeSalary() + this.#hours * this.#wage
    }
    

}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
//console.log(`person4 is ${person4}`)
const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', "Boker"),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]

function countOfPersonType(persons, type) {
    return  (persons.filter(p => p.constructor.name === type)).length
    //const ar = persons.filter(p => p.constructor.name === type.name)
    //console.log(`Quantity of this type ${type.name} -> ${ar.length}`)
    //return ar.length;
   
}
function computeSalaryBudget(persons) {
    const ar1 = persons.filter(p => p instanceof  Employee)
    const ar = ar1.reduce((t,p) => t + p.computeSalary(),0 )
    console.log(`2) Total budget -> ${ar}`)
}

function countChildrenGindergarten(persons, kindergarten) { 
    const arChild = countOfPersonType(persons, Child).filter(p => p.getKindergarten() === kindergarten)
    console.log ( `3) Number of children in kindergarten ${kindergarten} -> ${arChild.length}`)
}
                
// console.log(`1) Quantity persons of this type -> ${countOfPersonType(persons, Child).length}` )
// computeSalaryBudget(persons)
// countChildrenGindergarten(persons, 'Boker')

function testOutput (fun, expected){
    console.log(`function: ${fun.name}; expected result: ${expected}; actual result: ${fun()}`)
}
//testOutput(Employee.prototype.computeSalary.bind(person4),2000)
testOutput(person4.computeSalary.bind(person4),1000)

function computeSalaryBudget (persons) {
    const allEmployees = persons.filter(p => !!p.computeSalary)
    const salaryValues = allEmployees.map(p =>p.computeSalary())
    return salaryValues.reduce((res,cur) => res+cur)
}
testOutput(computeSalaryBudget.bind(undefined,persons), 3000)
testOutput(countOfPersonType.bind(undefined, persons, 'Child'),3)