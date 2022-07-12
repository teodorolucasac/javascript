function carregar() {   
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 7
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffca62'
    } else if (hora >= 12 && hora < 18 ) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#035901'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#14233f'
    }
    

}