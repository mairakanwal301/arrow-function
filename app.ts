/*let tea = (milk:number , sugar:number , tealeaves: number) => (
    milk + sugar +tealeaves
)

let dudhpatti:number = tea(1,3,4)
console.log(dudhpatti) */
//default parameter
let friend=(name:string,age:number=20) =>{console.log(`My friend name is ${name} her age is ${age}
and she is very pretty MASHALLAH. `)
}
friend("maira",15)
friend("ZARAH",2)
friend("Sana")    
// rest in arrow function
let friend1=(name:string,age:number=20,...rest:any[]) =>console.log("hello"+`My friend name is ${name} her age is ${age}
and she is very pretty MASHALLAH.`+ rest)

friend1("maira",15,"clifton")
friend1("ZARAH",2,"DHA")
friend1("Sana") 

// return in arrow function

let friend2=(name:string,age:number=20) =>{ return`My friend name is ${name} her age is ${age}
and she is very pretty MASHALLAH. ` 

}
console.log(friend2("maira",15))
console.log(friend2("ZARAH",2))
console.log(friend2("Sana"))   

let calculator = ( num1:number, num2: number)=>{
       let result = num1 - num2
       return result
}
console.log(calculator(3,6))