const products =[
    {id: 1 , name: 'lenovo', price: 650000},
    {id: 2 , name: 'dell', price: 650000},
    {id: 3 , name: 'Hp', price: 650000},
    {id: 4 , name: 'Mac', price: 650000},
]
const names = products.map( product => product.name)
console.log(names); // [ 'lenovo', 'dell', 'Hp', 'Mac' ]
