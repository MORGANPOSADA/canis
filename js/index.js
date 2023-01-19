//let var const
//const: genera una constante 
//const: es un valor que no va a ser modificado dentro de mi code, no va a sufrir una modificacion
//var y let: genera una variable 
//$scope = fragmento de codigo
/*EJEMPLO DE SCOPE
function suma(){
} */

//arrow function 
function suma(numero1, numero2){
    return numero1+numero2
}

const suma = function(numero1, numero2){
    return numero1+numero2
}

const suma = (numero1, numero2) =>numero1+numero2

//tiene un return implicito


const name ="Morgan"
const surname ="Posada"
const lastname ="Escobar"

//forma correcta
const fullname2= `${name} ${surname} ${surname}`











const person ={
    name: '',
    surname: '',
    lastname: null


}

//un arrow function autoejecutable 
(() =>{
    const name = person.name.toString();
    `${person.name} ${person.lastname ? person.lastname: ''}`
})()

if ternario: solo valida una condicion 

//array 
const roles =[1,2,3{name:'',surname:''}]
//arraylist : lista de objetos
const roles = [
    {
    key: 'ADMIN',
    name: 'Super  administrador'
},
{
    key: 'USER',
    name:'Usuario'
}
]
const roles3 ={
    key: 'ADMIN',
    name: 'Super  administrador',
},
{
    key: 'USER',
    name:'Usuario'
}


const roles= []
//arrayList array list 
//push, splice, indexOf, find, filter, map, foreach, lenght (son algunos prototipes que tienen la clase array)

roles.forEach((element, index) =>{
    console.log(element.name);
})

for(let i =0; i<= roles.length; i++){
    console.log(roles[i].name);
}

while(){

}

do{
}while();


//desestructuracion de objetos 
const person2 ={
    name: 'morgan',
    age: 24,
    address: {
        street: 'barona',
        number: 29
    }
}

console.log(person2.name);
console.log(person2.address.street);
//de esta forma se desestrutura
//esto funciona antes que nada viendo XD

const {name, address:{street}} = person2

