
const nums :number []= [1 ,2,3,4,5]
const num  =  nums.map((item)=>{
    const numbers  =  item * 2
    console.log(numbers)
})


const numfilter :number[] = [1,2,3,4,5]  
const numb =numfilter.filter(item=>{
     return item <= 4

})

console.log(numb)


const val:number[] = [1,2,3,4]

const values :number = val.reduce((previousValue: number, currentValue: number) =>{
 return previousValue + currentValue
})  

console.log(values)




