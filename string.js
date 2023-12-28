const name="vaish"
const age=20
// console.log("hi my name is ${name} and my age is ${age}")//concatatanation
const game= new String("vaishnavi")
console.log(game[0])//v
console.log(game.__proto__);//{}


//methods or functions
console.log(game.length)
console.log(game.toLowerCase())
console.log(game.toUpperCase())
console.log(game.charAt(4))
console.log(game.indexOf('a'))
console.log(game.toLowerCase())


const news= game.substring(0,4)
console.log(news)

//trim
const news1="vaish"
console.log(news1.trim())


//replace
const ne=" vaish  "
console.log(ne.replace('a','g'))