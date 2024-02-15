let score :number | string = 343
score = '33'


type User = {
    name:string,
    age:number
}

type Admin = {
    userName:string,
    key:number,
}

let john :User | Admin = {
    name:'ali',
    age:343,
}

// when jhon will becoe admin
john ={
    userName:'ali',
    key:333
}

// unions on functions (the id can either be number of string)
function getDbId(id: number | string){
    //making some API calls
    console.log(`DB id is: ${id}`);
    
}
getDbId(3)
getDbId("3")

function getMongoId(id:number|string){
    // type narrowing
    typeof id === 'string' ? id.toLocaleLowerCase() : id.toFixed(2)
}

// union on arrays

// For either number or either string (keeping the same type of elements)
const values :number[] | string[]= [] 

// to be mix of types in array
const mixValues :(number | string)[]=[1,'2']

// its values only should be 3.14
let pi:3.14 = 3.14
// pi = 234324


// EXAMPLE: A eroplon seat can only have three options
let seat :'window'| 'middle'| 'aisle' = 'middle' 
seat = 'middle'

// if i try to change other than three
// seat =33