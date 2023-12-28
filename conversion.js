let score="33"

console.log(typeof score)//first method to declare 
console.log(typeof (score))//Second method to declare 

let ValueinNumber=Number(score)//to convert the string to number
console.log(ValueinNumber)
console.log(typeof ValueinNumber)

let score1=null
let ValueinNumber1=Number(score1)//convert null
console.log(ValueinNumber1)
console.log(typeof ValueinNumber1)



let score12=undefined
let ValueinNumber12=Number(score12)//to convert undefined
console.log(ValueinNumber12)
console.log(typeof ValueinNumber12)



let scor12="abc"  //output NaN 
let ValueinNumber112=Number(scor12)//to convert the string to number
console.log(ValueinNumber112)
console.log(typeof ValueinNumber112)



//"33"-> 33
//"33abc" -> Nan (Not a Number)
//true -> 1 and false -> 0

let isLoggedIn = 1//this is for boolean values
let boolenIsLoggedIn= Boolean(isLoggedIn)
console.log(boolenIsLoggedIn)
//this is for boolean values
//1-> true
//0-> false
//empty string-> false
//"abc"-> true


//convert the number or integer  into the  strings
let sNumber=33
let StringNumber= String(sNumber)
console.log(StringNumber)
console.log(typeof StringNumber)