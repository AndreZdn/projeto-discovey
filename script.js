function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    // tem que pegar a img 
    const img = document.querySelector('#profile img')

    //substituir a imagem
    if(html.classList.contains('light')){
        // se tiber light mode adicionar a imagem light 
           img.setAttribute('src', './assets/avatar-light.png')
           img.setAttribute('alt', 'imagem do maykbrito de oculos escuro com o fundo de gradiente roxo da esquerda ate azul da direita')
         } else {
             // se não tiver light mode adicionar imagem normal
           img.setAttribute('src', './assets/avatar.png') 
           img.setAttribute('alt', 'imagem do maykbrito com um fundo normal')
         }



}