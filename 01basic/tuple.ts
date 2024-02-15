// In TypeScript, tuples are a data type that allows you to specify the types of each element in the tuple and enforce that they match a specific pattern

let userDetailsInOrder:[string,number,number]
userDetailsInOrder=['ali',17,343]

type user = [number,string]

const jhon :user= [13,'ali']
jhon[0] = 333
jhon[1] ='hassan'

// array methods can work on tuples and can accept the any amount of data that which is defined in the tuple (which is very very bad so be careful)
// jhon.push('d')