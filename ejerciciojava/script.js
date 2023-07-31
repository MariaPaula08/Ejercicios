const arrNumeros = [1,4,8,7,9,3,2]

function fnNumMayor(arr){
    let numMayor = 0 
    for(let i = 0; i < arrNumeros.length; i++){
        if(arrNumeros[i] > numMayor){
            numMayor = arrNumeros[i]
        }
    }
    return console.log(`El numero mayor es: ${numMayor}`)
}

fnNumMayor(arrNumeros)

