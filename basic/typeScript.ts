
// primitive type  and other
/*
string = "hello",
number = including whole number integer and float eg 10 , 10.2
boolean =  true or false
array =  t[1,2,3] 
unknown =
object =

*/


//varibles type checking with examples 


// const username: string =20 // invalid type number does not use in string type

// const username: string ="Gautam"

// // Block scope

// {
//     const username :string = "anuraj"
//     console.log(username)
// }
// console.log(username)


// let myFavouriteNum:number =  20

// {
//     let myFavouriteNum:string = "20"
//     console.log(myFavouriteNum) 

// }


const numArr:number[]  =  [1 ,2 ,3 ,4]
numArr.forEach(num=>{
    console.log(num +2)
})


const programmingLang:string[] = ["Java" , "js", "ts", "c", "c++"] 

// for (const code in programmingLang) {
// //   const element  =  programmingLang[code]
//   const element1  =  programmingLang[code]
//   console.log(element1)  
// }


for (const code  of programmingLang) {
    console.log(code) 
}




// boolean and bigint

let isDone:boolean = true
let hasStarted:boolean =  false

// hasStarted =  "yes" // invalid in ts


// bigint

const maxNum:bigint =  2085136845586456124856n
console.log(maxNum)

const anotherNUm:bigint =24571528521851798454n

console.log(maxNum +anotherNUm)






