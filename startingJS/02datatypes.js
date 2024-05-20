//Data types

let name = "Rahul" //string
let age = 18 //number
let isLoggedIn =  false //boolean
let state;  //undefined
//null is a standalone value
//symbol for uniqueness
//object

console.log(typeof age); //to find the data type

// there are two types of data
// first - primitive (strings,num,bool,null,undefined,symbols)
// second- reference (array,objects,functions)
const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId)// in symbols each value is diff even if they are assigned the same values

//arrays 
 const heros = ["abc","def","xyz"]

 //objects

 let myObj={
    name:"rahul",
    age:19,

 }

//function

const myFunction = function(){
    console.log("hello function");
}

