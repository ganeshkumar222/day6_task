class Uber{
    constructor(price){
        this.price = price
    }
    getuberprice(kms){
       return `cost for this ride ${kms*this.price}`
    }

}
const ucar = new Uber(25)
console.log(ucar.getuberprice(22))