


// Using default parameters for function
const myfun = (a = 10) => {
    return a;
};
console.log(myfun(20)); // output: 20
console.log(myfun());   //output: 10


//Arrow Functions
const sub = (a, b) => a - b;
console.log(sub(5, 3)); // output: 2

//Destructuring Assignment
const user = { name: "Alice", age: 30 };
const { name, age } = user;
console.log(name, age); // output : Alice 30

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // output : 1 2

//Rest and Spread Operators

// Rest
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); //  output : 10

// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); //  output : [1, 2, 3, 4, 5]

// Map and Set
// Map
const map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // Alice

// Set
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }

// let ,const and var example
function get() {
    var a = 10;
    a = 20;
    // function scoped redeclared and assigned again
    console.log(a);

    let b = 10;
    // let b=20;  gives error redeclared not allowed
    b = 40;  // reassigned again 
    console.log(b);

    const c = 10;
    // const c=20;  gives error redeclared not allowed
    //c=20;  // Error: Assignment to constant variable
    console.log(c);
}
get();
