let num = document.getElementById('fnum')
let lis = document.getElementById('flis')
let res = document.querySelector('div#res')
let val = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lis.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert ('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (val.length == 0){
        window.alert ('Adicione valores antes de finalizar!')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val [0]
        let media = 0
        let soma = 0
    for (let pos in val) {
        soma += val[pos]
        if (val[pos] > maior)
            maior = val[pos]
        if (val[pos] < menor)
            menor = val[pos]
    }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}





/*let num = document.getElementById('fnum')
let lis = document.getElementById('flis')
let res = document.querySelector('div#res')
let val = []
function adicionar() {
    let n = Number(num.value)
    if (num.value.length == 0 || n > 100) {
        window.alert ('Valor inválido ou já encontrado na lista.')
    } else {
        let c = 1
        let item = document.createElement('option')
            item.value = `lis${c}` //preciso dar um valor para usa-lo dps
            c++
            item.text = `${n}`
            lis.appendChild(item)
    }
}
function finalizar() {
    if (c >= 1) {
        res.innerHTML += (`Ao todo temos ${lis} cadastrados`)
    } else {
        window.alert ('Valor inválido ou já encontrado na lista.')
    }
}*/