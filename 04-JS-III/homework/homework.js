// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var arreglo=array;
  return(arreglo[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var arreglo= array;
  return(arreglo[arreglo.length -1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var arreglo= array;
  var largo= arreglo.length;
  return(largo);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arreglo= array;
  for (var i= 0; i<arreglo[arreglo.length -2]; i++){
    if(arreglo[i])
    arreglo[i]= arreglo[i]+1;
  }
  return(arreglo);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var espacio = " ";
  var string="";
  var arreglo= palabras;
  var i=0;
  string=string.concat(arreglo[i]);
  for (var i=1; i<arreglo.length; i++){
    string=string.concat(espacio);
    string=string.concat(arreglo[i]);
  }
  return(string);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i =0; i<array[array.length -1]; i++){
    if(elemento===array[i]){
      return(true);
    }
  }
  return(false);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0; var i=0;
  var numero=0;

  for(i=0; i<numeros.length ; i++){
   suma+=numeros[i];
  }
  return(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  var suma=0;

  for (var i=0; i<resultadosTest.length; i++){
    suma+=resultadosTest[i];
  }
  promedio=suma;
  promedio=promedio/resultadosTest.length;
  return(promedio);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numero=0;
  var i=0;
  for(i=0; i<numeros.length; i++){
    if(numeros[i]>numero){
      numero=numeros[i];
    }
  }
  return(numero);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto=0;
  var i=0;
  var numero;
  numero=arguments[0]
  if(arguments[0]===undefined || arguments[0]===null){
    numero=0;
  }
  for (i=1; i<arguments.length; i++){
   // numero=arguments[0]
    numero*=arguments[i];
  }
  return(numero);
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad=0;
  var i=0;
  for (i=0; i<arreglo.length; i++){
    if(arreglo[i]>18){
      cantidad+=1;
    }
  }
  return(cantidad);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var dia=numeroDeDia;
  if(dia===1 || dia===7){
    return('Es fin de semana');
  }
  if(dia!==7 || dia!==1){
    return('Es dia Laboral');
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var j=9;
  for(var i=1; i<1000000; i++){
    if(n===j || (n>j*10 && n<j*10+10)|| (n>j*100 && n<j*100+100) || (n>j*1000 && n<j*1000+1000)){
      return(true);
    }
  }
  return(false);
}
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var i=0;
  var contador=0;
  var control=0;
  control=arreglo[0];
  if(control===arreglo[0]){
    contador+=1;
  }
  for(i=1; i<arreglo.length-1;i++){
    if(control===arreglo[i]){
      contador+=1;
    }
  }
  if(contador===arreglo.length -1){
    return(true);
  }
  return(false);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arreglo=[];
  var i=0;
  var contador=0;
  for(i=0; i<array.length; i++){
    if(array[i]==='Enero'){
      arreglo.push(array[i]);
      contador+=1;
    }
    if(array[i]==='Marzo'){
      arreglo.push(array[i]);
      contador+=1;
    }
    if(array[i]==='Noviembre'){
      arreglo.push(array[i]);
      contador+=1;
    }
  }
  if(contador===3){
    return(arreglo);
  }else{
    return("No se encontraron los meses pedidos");
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arreglo=[];
  var i=0;
  //var j=0;
  for(i=0; i<array.length;i++){
    if(array[i]>100){
      arreglo.push(array[i]);
   }
  }
  return(arreglo);
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i=0;
  var arreglo=[];
  for (i=0; i<10; i++){
    numero+=2;
    arreglo.push(numero);
    if(i===arreglo[i]){
      return('Se interrumpió la ejecución');
      break;
    };
    
  }
  return(arreglo);
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arreglo=[];
  var i=0;
  for(i=0; i<10;i++){
  
    if(i===5){
      continue;
    }
    numero+=2;
    arreglo.push(numero);
  }
  return(arreglo);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
