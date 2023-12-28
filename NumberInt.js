const  balance=new Number(100)
console.log(balance)
console.log()

console.log(balance.toString().length)
console.log(balance.toFixed(1))
console.log()

const othernum=1123.839
console.log(othernum.toPrecision(4))
console.log()

const zeros=100000000
console.log(zeros.toLocaleString())
console.log(zeros.toLocaleString('en-IN'))//Indian Rs 
console.log()

//+++++++++++++Maths++++++++++++++++++
console.log(Math)
console.log(Math.abs(-7))//positive value became always positive it can not convert to negative. But Negative value converted into Positive value using abs() method
console.log()

console.log(Math.round(2.66))
console.log(Math.ceil(2.66))//top value
console.log(Math.floor(2.66))//lowest value
console.log()

console.log(Math.min(2,45,1,2))//find min value
console.log(Math.max(2,45,1,2))//find max value
console.log()

console.log(Math.random())//value range 0 to 1
console.log((Math.random()*10)+ 1)
console.log(Math.floor(Math.random()*10)+ 1)// using +1 the range value 1 to 9
console.log()
 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)// using +1 we can avoid 0 value it return 1 to 9 value 