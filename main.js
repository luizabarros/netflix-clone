mostrarCookies('cookies')
function mostrarCookies(pegar_classe) {
    var pop_up = document.getElementsByClassName(pegar_classe)[0]
    var aceitar_cookies = document.getElementsByClassName('aceitar')[0]
    
    if (localStorage.botaoAceitar != aceitar_cookies) {
        pop_up.classList.add('show')
        
        aceitar_cookies.addEventListener('click', fecharCookies)
        function fecharCookies() {
            pop_up.classList.remove('show')
            localStorage.botaoAceitar = aceitar_cookies
        }
    }
}
