window.addEventListener("scroll", function(){

    let imagens = document.querySelector('.container-home-rigth')
    
    imagens.classList.toggle('rolagem', window.screenY > 0)
    imagens.styles = `display: none`
    
})