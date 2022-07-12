let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[1]}`)
//num[5] = 10 //cria um elemento com o valor
//num.push(10) //coloca o valor criando o último elemento
//num.length //length não é método, é atributo
//num.sort() //coloca todos os elementos em ordem crescente
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor 9 está na posição ${pos}`)
}