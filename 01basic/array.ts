let heros :string[]  =[]
const herosDc :Array<string> = []

heros.push('')
herosDc.push('dc')

type User = {
    name:string,
    age:number
}

// an array of type that only accept an object of user type
const allUsers :User[] = []
allUsers.push({
    name:'ali',
    age:3
}) 

// an array of array of numbers
const MLmodels :number[] []= [
    [1],
    [2]
]

// an array of objecs
const complexMLmodels :object[]  = [
{},{}
]

export {}