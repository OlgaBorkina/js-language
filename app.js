class Person { 
        #id;
        #name;
        constructor(id,name){
            this.#id = id;
            this.#name = name;
        }
        getId() {
            return this.#id;
                }
        getName() {
            return this.#name;
        }
        toString(){
            return ` id : ${this.#id}, name: ${this.#name} ;` ;
        }
}
class Employee extends Person {
    #salary;
    constructor (id,name,salary){
            super(id,name);
            this.#salary = salary;
    }
    computeSalary() {
        return this.#salary;
    }
    toString () {
        return super.toString() + `salary : ${this.#salary}`;
    }
}

class Child extends Person {
    #kindergarten;
    constructor( id,name,kindergarten){
        super (id,name)
        this.#kindergarten = kindergarten;
    }
    getkindergarten() {
        return this.#kindergarten;
    }
    toString(){
        return super.toString() +` kindergarten : ${this.#kindergarten}`
        
    }
}


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

const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', "Boker"),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]

function countOfPersonType(persons, type) {
    const ar = persons.filter(p => p.constructor.name === type.name)
    //console.log(`Quantity of this type ${type.name} -> ${ar.length}`)
    return ar;
   
}
function computeSalaryBudget(persons) {
    const ar1 = persons.filter(p => p instanceof  Employee)
    const ar = ar1.reduce((t,p) => t + p.computeSalary(),0 )
    console.log(`2) Total budget -> ${ar}`)
}

function countChildrenGindergarten(persons, kindergarten) { 
    const arChild = countOfPersonType(persons, Child).filter(p => p.getkindergarten() === kindergarten)
    console.log ( `3) Number of children in kindergarten ${kindergarten} -> ${arChild.length}`)
}
                
console.log(`1) Quantity persons of this type -> ${countOfPersonType(persons, Child).length}` )
computeSalaryBudget(persons)
countChildrenGindergarten(persons, 'Boker')
