interface User{
    readonly _id:string,
    email:string,
    userName?:string,

    // adding method in interfaces
    // this method should return string
    // startTrail: () => string
    startTrail(): string

    getCoupon(couponname: string, value: number): number
}

// reopening intefanece
interface User{
    isAdult:boolean
}

// inheritence between interface
interface Admin extends User{
    role:'Network admin'
}


const ali:User={
    _id:'ali',
    userName:'ali',
    email:'alihe',
    isAdult:false,
    startTrail() {
        return 'a'
    },

    // here i need to give the names of parameters and name does not need to be matched with the name defined inthe interface
    getCoupon:(coupan33:"ali" , v:34)=>{
        return 33
    }

}