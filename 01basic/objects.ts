const user= {
    name:'Ali',
    age:33
}

const createGmail = (information:
    {
    user:string,
    birthYear:number,
    email:string
})=>{
    return console.log(information.email); 
}

createGmail({
    user:'ali',
    birthYear:34,
    email:'fddf',
})

// weired behaviour of ts
const createGmail2 = (information:{user:string,birthYear:number})=>{
    return console.log();
    
}

// here ts is throwing error because there are more arguments then it is defined in the funcion
// createGmail2({
//     user:'ali',
//     birthYear:34,
//     email:'fddf',
// })


let details = {
    user:'ali',
    birthYear:34,
   email:'fddf',
}

// and if a make a object then pass it then no error is coming
createGmail2(details)


// type Aliases (for if we want to use the same things with same types accross multiple places)
type myCreatedString = string

type anime={
    name:string,
    duration:number,
    language:string
}

function createGame(game:anime):anime{
    return {
        name:'GTA',
        duration:3,
        language:'Eng'
    }
}

createGame({
    name:'GTA',
    duration:3,
    language:'Eng'
})

// ReadOnly
// readonly will not give error if we push in the array because we are just chainging the content
type user={
  readonly  _id : string,
    name:string,
    email:string,
    age:number,
    // optional property
    gender ?:string
}

let use:user={
    _id:'ldfjl',
    name:'dfdj',
    email:'djfas',
    age:4334
}


type productName = string
type productPrice = number

// combing the two properties and a a new object property
type productCart = productName & productPrice & {
    productDes:string
} 







export {}