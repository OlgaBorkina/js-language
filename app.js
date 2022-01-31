
/****************************cw #15 */
//input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
//output: lmn -> 3
//        a -> 2
//        d -> 2
//        bc -> 1
function displayOccurrences(arr) {
        //const res = {};
        // for (let i = 0; i < array.length; i++) {
        //         if (res[array[i]] === undefined) {
        //                 //string as content of array[i] occures first time
        //                 res[array[i]] = 1;
        //         } else {
        //                 res[array[i]] = res[array[i]] + 1;
        //         }
        // }
        const res = arr.reduce(function(prev, cur) {
                prev[cur] = (prev[cur] || 0) + 1;
                return prev;
              },{});
        //console.log(res) // -> intermediate debug log
        Object.entries(res).sort((e1, e2) => {
                const res = e2[1] - e1[1];
                return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
        }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))


}
//const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
//displayOccurrences(ar);

// //examples:
// // const arr = [6.4, 7.3, 6.5, 6.9];
// //const statistics = countBy(arr, element => Math.floor(element))
// //result: statistics -> {"6": 3, "7":1}
const arr = [6.4, 7.3, 6.5, 6.9];
const newArr = arr.map(Math.floor);
//console.log(newArr);
displayOccurrences(newArr);

const arr = ['abcd', 'lmnr', 'ab', 'dddd'];

// //const statistics = countBy(arr, element => element.length)
// //result: statistics -> {"4": 3, "2":1}
// //const arr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
// // {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}  ]
// //const statistics = countBy(arr, element -> element.age)
// //result statistics -> {"25":2, "50":1, "70":1}