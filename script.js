function trocarImagem() {
    const maxAleatorio = 300;
    
    const numeroAleatorio = Math.floor(Math.random() * maxAleatorio);
    
    const imagem = document.getElementById("imagemAleatoria");
    
    imagem.src = "https://picsum.photos/id/" + numeroAleatorio + "/200/300";
}