var numeros = [100, 500, 3200, 50, 879];
var mayor = 0;

for(var i = 0; i < numeros.length; i++) {
    if(numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log('el mayor de ' + numeros + 'es'+ mayor);
//no lo puedo ver en console.log
