

// primitive type 
/*
string  =  ""
number = all numbers float , int etc
boolean = true or false
*/


// string type 

let myFullName:string =  "Anuraj Gautam"
let username: string =  "Anup"
let firstName:string =  "Rajan"

let InvalidNum:string = firstName + "20"
console.log(InvalidNum)


console.log(username )


// number All number int float

const myFavNum: number  =  20
const NegNum :number= -2
const floatNum:number = 2.2

console.log(  myFavNum.toString())

console.log( typeof myFavNum.toString())


// let InvalidNums:number = myFavNum +"Gautam" 
// console.log(InvalidNums)


// const Invalidnum1:number= "123"  


//
const computedVal:number =  Math.sqrt(16)
console.log(computedVal)



let nanValue:number =  NaN
console.log( typeof nanValue)


const text:string ="Hello TypeScript"  

//length:string is not valid 
const textlength :number = text.length
console.log( "text length: ", textlength) 
const textUpp:string =  text.toUpperCase()
const textLower:string = text.toLowerCase()  
console.log(textLower)
console.log(textUpp)





// any = we use any to avoid typechecking error
// array

const numArr:number[] =   [1,2,3,4] 
console.log(numArr)



