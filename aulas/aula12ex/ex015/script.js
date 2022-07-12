function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriancah.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotojovemh.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadultoh.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosoh.png')
            }
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriancam.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotojovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadultom.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}