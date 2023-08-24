const products =[
    {id: 1 , name: 'lenovo', price: 650000},
    {id: 2 , name: 'dell', price: 650000},
    {id: 3 , name: 'Hp', price: 650000},
    {id: 4 , name: 'Mac', price: 650000},
]
// has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('Le le lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kau')


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapon sir', 'Physics')
console.log(tapan);

const rashid = new Teacher('Rashid', 'English')