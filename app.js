const person1 = { 
        id: 123,
        name: 'Moshe', 
        address: { 
                city: 'Lod', 
                street: 'Sokolov' } };
const person2 = { 
        id: 123, 
        name: 'Moshe', 
        address: { 
                city: 'Lod',
                street: 'Sokolov' } };
const person3 = person1;

console.log(`"123" == 123 is ${"123" == 123}`);
console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`person1 === person3 is ${person1 === person3}`)
console.log(`person1 === person2 is ${person1 === person2}`)
console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) ===
        JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(person1.toString());
console.log(`name of person1 is ${person1.name}`)
console.log(`person1 lives in city ${person1.address.city}`);
Object.keys(person1).forEach(k => console.log(k)) //array of the object keys
Object.values(person1).forEach(v => console.log(v)); //array of the object values
Object.entries(person1).forEach(e => console.log(e)); //array of arrays - [key, value]
console.log(Object.entries(person1));

function createAddress(city, street) {
        //{city: city, street: street} <=> {city, street}
        return {city, street}
}
function createPerson(id, name, address) {
        return {id, name, address};
}
const persons = [
        createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
        createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
        createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
        createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]
/**************************************HW 14 definition task3 */ 

//TODO write function getPersonsCity(persons, city) , taking array of the persons and a city (see the branch js-objects ) and returning array of the persons living in the given city. For example, find persons living in Rehovot 

// Input: const persons = [ 

//         createPerson(123, "Vasya", createAddress("Rehovot","Parshani")), 

//         createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")), 

//         createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")), 

//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov')) 

// ] 

// Output: getPersonsCity(persons, ‘Rehovot’) => [ 

//         {id: 123, name: "Vasya", address:{city: "Rehovot",street: "Parshani")), 

//         {id: 124, name: "Olya", address:{city: "Rehovot",street: "Pr. Plaut")) 

// ] 
/*************************************************HW 14 solutions */
//task 3
// function getPersonsCity(persons, city) {
//         return persons.filter(p => p.address.city === city);
// }
// console.log(getPersonsCity(persons, 'Rehovot'));
//task 4
// function movePersonsNoCityAtBeginning(persons, city) {
//         const personsRes = getPersonsCity(persons, city);
//         personsRes.unshift(...persons.filter(p => p.address.city !== city));
//         return personsRes;
// }
// console.log(movePersonsNoCityAtBeginning(persons,  'Rehovot'));
/****************************cw #15 */
//input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
//output: lmn -> 3
//        a -> 2
//        d -> 2
//        bc -> 1
function displayOccurrences(array) {
        //creating object with key - unique element of array (string as an element of array)
        //                     value - occurrences count
        //difference between  obj ={a: 123, d: "abc"}; const a = "d" ; obj.a === 123,
        // and obj[a] === "abc"
        //obj.c = 10 -> {a: 123, d: "abc", c: 10}
        const res = {};
        for (let i = 0; i < array.length; i++) {
                if (res[array[i]] === undefined) {
                        //string as content of array[i] occures first time
                        res[array[i]] = 1;
                } else {
                        res[array[i]] = res[array[i]] + 1;
                }
        }
        // console.log(res) -> intermediate debug log
        Object.entries(res).sort((e1, e2) => {
                const res = e2[1] - e1[1];
                return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
        }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))


}
const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);
/**********************************************HW #15 task1 */
//refactoring of displayOccurrences function from the classwork #15
//lines 92 - 99 should be a separated function
//that separated function should apply standard methods like reduce

/**********************************************************HW #15 task2 */
// write useful function countBy(array, callbackFun) that returns object
// with keys as grouping criteria  and values as the occurrence counts

//where array - any array, callbackFun - function returning grouping criteria
//examples:
// const arr = [6.4, 7.3, 6.5, 6.9];
//const statistics = countBy(arr, element => Math.floor(element))
//result: statistics -> {"6": 3, "7":1}
// const arr = ['abcd', 'lmnr', 'ab', 'dddd'];
//const statistics = countBy(arr, element => element.length)
//result: statistics -> {"4": 3, "2":1}
//const arr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
// {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}  ]
//const statistics = countBy(arr, element -> element.age)
//result statistics -> {"25":2, "50":1, "70":1}