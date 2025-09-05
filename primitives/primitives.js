// Number

let balance = 120;
console.log(typeof balance);
// Making everything complex
let another_balance = new Number(120);
console.log(another_balance);
console.log(another_balance.valueOf());
console.log(typeof another_balance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(false);

//null and undefined
let firstname = null;
console.log(firstname);
// let secondname
// console.log(secondname);

// secondname is not defined
//     at Object.<anonymous> (C:\Users\kedar\OneDrive\Desktop\Documents\Kedar\javascript_web_dev\javascriptfile\primitives\primitives.js:19:13)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// string

let mystring = "Hello";
let mystrings = "ola";
let username = "Kedareswar";

let greetMessage = `Hello ${username}`;
console.log(greetMessage);

// Symbol

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1);

