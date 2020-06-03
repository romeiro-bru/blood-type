function compatibilidade() {
    var doador = document.getElementById('doador-type')
    var receptor = document.getElementById('receptor-type')
    var resultado = document.querySelector('div#resultado')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (doador.value == "-" || receptor.value == "-") {
        resultado.innerHTML = 'Selecione os tipos sanguíneos'
    } else {
        if (doador.value == "O") {       
            if (receptor.value == "O" || receptor.value == "A") {
                resultado.innerHTML = 'Os tipos sanguíneos são compatíveis!'
                img.setAttribute('src', 'happy-drop.png')
            } else {
                resultado.innerHTML = 'Os tipos sanguíneos são compatíveis!'
                img.setAttribute('src', 'happy-drop.png')
            }
        } else if (doador.value == "A") {
            if (receptor.value == "A" || receptor.value == "AB") {
                resultado.innerHTML = 'Os tipos sanguíneos são compatíveis!'
                img.setAttribute('src', 'happy-drop.png')
            } else {
                resultado.innerHTML = 'Os tipos sanguíneos não são compatíveis.'
                img.setAttribute('src', 'sad-drop.png')
            }
        } else if (doador.value == "B") {
            if (receptor.value == "B" || receptor.value == "AB") {
                resultado.innerHTML = 'Os tipos sanguíneos são compatíveis!'
                img.setAttribute('src', 'happy-drop.png')
            } else {
                resultado.innerHTML = 'Os tipos sanguíneos não são compatíveis.'
                img.setAttribute('src', 'sad-drop.png')
            }        
        } else {
            if (receptor.value == "AB") {
                resultado.innerHTML = 'Os tipos sanguíneos são compatíveis!'
                img.setAttribute('src', 'happy-drop.png')
            } else {
                resultado.innerHTML = 'Os tipos sanguíneos não são compatíveis.'
                img.setAttribute('src', 'sad-drop.png')
            }
        }
}
    resultado.appendChild(img)
}
