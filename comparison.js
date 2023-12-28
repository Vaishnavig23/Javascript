console.log(2>1)//same data type for compariosn
console.log(2>=1)
console.log(2<=1)
console.log(2==1)

console.log()
//differnt data types dont use differnt data types for comparisons 
console.log("2">1)
console.log("02">1)

console.log()
// avoid this kinds of comparions(null and undefined)
console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log()
console.log(undefined==0)
console.log(undefined<=0)
console.log(undefined>=0)
console.log()

//=== :-strict check. It can check data types also
console.log("2"===2)