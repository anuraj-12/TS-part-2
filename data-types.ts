// most common data type are String , Number and Boolean
//these are primitive types

// any :  it is a typescript special type. you can use any whenever we do not want to particular value to cause typechecking  errors


// type annotation on variables


// let myName = "Anuraj"  //js  


let myName:string = "Anuraj"  // ts 
console.log(myName)


// function parameter types annotation 

const greet = (username:string)  =>{
  
    console.log( "Hello" ,  + username.toLowerCase())
}
greet(20)


// Return Type Annotations

function getBiggestNumber() : number {
    return 20

}


// Functions Which Return Promises

