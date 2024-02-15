let name: string = 'ali'

// dont do that because it too  obivous and that typescript will figure out own his own (type inference)
// const id: number = 34343
let id = 34343;

// never user any

// funcions
const addTwo= (num:number):number =>{
    return 2+num
}

console.log(addTwo(2));


export {}