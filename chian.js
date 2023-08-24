// data access
const data = [{
    id:1, 
    name:'abul',
    address:'kochu khet'
}]
const address =data[0];
// console.log(address.address)


const user ={
    id: 5111,
    name: 'abbu bakar',
    address:{
        street:{
            first:'54/4 uttor side',
            second:'poribag er  goli',
            third: 'no dorai'
        },
        city:'Dhaka'
    }
}
console.log(user.address.street.second)