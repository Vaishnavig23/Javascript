"use strict";//treat allJS code as newer version

// alert("Hello")// we are using node JS not browser
//code readability should be high
//use mdn documentation or tc39.es

let name="ABC" //string " "
let age=18 //Integer
let isLoggedIn=false// boolen value true or false


//primitives:- 7 types string, number,boolean,null,undefined,symbol,BigInt
//number = 2 to power 53
//bigint
//null= standalone value
//undefined= value assign nahi hui
//symbol= unique  
const id = Symbol('123')//symbol declaration

//object
console.log(typeof "ABC")

//null is the object 
//undefined type is undefined


//Refernce(non Primitive): Array, Object,Functions

//Array
const hero=["dogha",'shaktiman'];
let myobj={
    name:"vaish",
     age:20
}
console.log(myobj)


//Function
const myFunction= function(){
    console.log("hiii ")
}
