let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log (valores)

/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/ //1ª forma de mostrar todos os elementos + valores deles

/*for (let pos = 0; pos < valores.length; pos++) {
console.log (`A posição ${pos} tem o valor ${valores[pos]}`)   
}
*/ //2ª forma de mostrar todos os elementos + valores deles

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //3ª forma de mostrar todos os elementos + valores deles

