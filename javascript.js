function inserir(num) {
    var numero = document.getElementById('fundoDeQuintal').innerHTML
    document.getElementById('fundoDeQuintal').innerHTML = numero + num
}
function limpar() {
    document.getElementById('fundoDeQuintal').innerHTML = ''
}
function igual() {
    var resultado = document.getElementById('fundoDeQuintal').innerHTML
    if (resultado) {
        document.getElementById('fundoDeQuintal').innerHTML = eval(resultado)
    }
}