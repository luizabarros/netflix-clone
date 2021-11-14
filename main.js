mostrarCookies('cookies')
function mostrarCookies(pegar_classe) {
    var pop_up = document.getElementsByClassName(pegar_classe)[0]
    pop_up.classList.add('show')

    var aceitar_cookies = document.getElementsByClassName('aceitar')[0]
    aceitar_cookies.addEventListener('click', fecharCookies)

    function fecharCookies() {
        pop_up.classList.remove('show')
    }
}