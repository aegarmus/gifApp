//Spread Operator => Separa datos de un conjunto (objeto o array)
const obj = {
    nomre: 'akkawkaw',
    apellido: 'aksnas',
    edad: 25
}

//copia superficial
const obj2 = {...obj}

obj2.profesion = 'desarrollador'

/* console.log("obj",obj)
console.log("obj2",obj2)
 */
const array = [1,2,3,4,5,6]

const array1v2 = [7,8,9,10, array]
const array2 = [7,8,9,10, ...array]

//const array3 = [1,2,3,4,5,6,7,8,9,10]
console.log("array2 Spread",array2);



//Rest Operator => Agrega datos a un conjunto (objtos o arrays)
const miFuncion = (num, num2, nombre, ...nums) => {
    const arrayNum = [num, num2,  nombre, ...nums]
    console.log("arrayNum Rest", arrayNum)

}


miFuncion(1,2,"Daniel",5,6,7,8,10,125,50, "Carolina", "Angelo", "Jean")