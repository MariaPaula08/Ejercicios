//Funciones

//function nombreFunction(p1, p2){
    //codigo a ejecutar
    //declaraciones variables
    //condicionales bucles
    //return resultado
//}

//HELLO THERE
function saludo(){
    console.log('Hello there')
}
console.log(saludo())


//HOLA
function saludos(){
    return 'hola'
}
console.log(saludos())


//ARRAY
function saludo1(){
    return [1, 2, 3]
}
console.log(saludo1())

//OBJETO
function saludo(){
    return{nombre : 'morocho'}            
}
console.log(saludo())

// Es una funcion anilada
function salud(){
    return function (){
        return 'hola a todos'
    }
}
console.log(salud()())

//NOMBRE
function salid(nombre){
    return 'Hola ' + nombre
}
console.log(salid ('Paula'))

//NOMBRE Y APELLIDO
function salu(nombre, apellido){
    return 'Hola ' + nombre + apellido
}
console.log(salu ('Paula ', 'Polanco'))

//SUMA
function suma(a, b){
    return a + b
}
console.log(suma (8,2))

//
function suma(a, b = 0){

    return a + b
}
console.log(suma(3,5))

//PARAMETROS PREDETERMINADOS
function saludar(nombre = 'Invitado'){
    console.log('Hola!, ' + nombre)
}
console.log(saludar('Maria'))
saludar('Gildardo')

const persona = {
    nombre: 'Karol',
    edad:19,
    saludar:function(){
        console.log('Hola, ')
    }
}
console.log(persona)
console.log(persona.nombre)
console.log(persona.edad)
persona.saludar()

const user = {
    nombre: 'Jimmy',
    Apellido: 'Lombana',
    edad: 30,
    direccion:{
        pais:'Colombia',
        departamento:'Huila',
        ciudad:'Garzon',
    },
    amigos: ['Morocho', 'Karol', 'Polo'],
    active: true,
    enviarMail:function(){
        return 'Enviado Correo ...'
    }
}
console.log(user.nombre)
console.log(user.direccion)
console.log(user.amigos)
console.log(user.direccion.departamento)
console.log(user.enviarMail())

// clase de viernes 

//Funciones
function nombreFunction(parametro1, parametro2){
    //codigo a ejecutar
    //declaraciones variables
    //condicionales bucles
    return resultado
}
//Hello There
function saludo(){
    console.log('Hello there')
}

console.log(saludo())

//Array
function saludo1(){
    return [1,2,3,4]
}

console.log(saludo1())

//Objeto
function saludo2(){
    return {nombre: 'tatiana'}
}

console.log(saludo2())

//funcion dentro de otra funcion
function saludo3(){
    return function(){
    return 'Hola a todos'
    }
}
console.log(saludo3()())

//Nombre y apellido
function saludo4(nombre, apellido){
    return 'Hola ' + nombre + apellido
}
console.log(saludo4 ('Tatiana ', 'Angarita'))

//SUMA
function suma (a, b){
    return a + b
}
console.log(suma(3,8)) 

//SUMA 2
function suma (a, b){
    if (b === undefined){
        b = 0
    }
    return a + b
}
console.log(suma(3)) 

//PARAMETRO PREDETERMINADO

function saludar(nombre = 'invitado'){
    console.log('Hola!, ' + nombre)
}

console.log(saludar('Karol'))
saludar('Tatiana') //de las dos formas de puede

//FUNCION DENTRO DE OTRA FUNCION

function saludo(nombre = 'invitado'){
    return function(){
        return 'Hola ' + nombre
    }
}

console.log(saludo('karol')())

//OBJETO

const person = {
    nombre: 'Karol',
    edad: 19,
    saludo: function(){
        console.log('Hola')
    },
    amigos: ['Sergio', 'Paula'],
    enviarEmail(){
        return 'Enviando Correo'
    }
}

console.log(person.nombre)
console.log(person.edad)
console.log(person.amigos)
person.saludo()

console.log(person.enviarEmail())

//Shorthan property names
//propiedades abreviadas

const nombre = "Arcico"
const edad = 20

const humano = {
    nombre,
    edad,
    saludo(){
        console.log(nombre + ' ' +edad)
    }
}

console.log(humano.nombre)
console.log(humano.edad)
humano.saludo()

const pc = 'Laptop ASUS M16'
const precio = 'USD $5000'

const newProduct = {
    pc,
    precio
}

console.log(newProduct)