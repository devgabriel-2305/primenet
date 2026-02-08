const burguer = document.getElementById('btn-mobile')
function mostramenu(){
    let itens = document.getElementById('itens')
    let icon = document.getElementById('simbol')
    itens.classList.toggle('active')

    if(itens.classList.contains('active')){
        icon.innerHTML = 'Close'
    }else{
        icon.innerHTML = 'Menu'
    }
}
burguer.addEventListener('click', mostramenu)