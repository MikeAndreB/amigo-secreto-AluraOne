let amigos = [];
// Função para adicionar amigos e verificar se campo está vazio.
function adicionarAmigo() {
    let adicionarAmigoNaLista = document.querySelector('input').value;
    if (adicionarAmigoNaLista === ""){

        return alert('Por favor digite um nome');

    } else {
        amigos.push(adicionarAmigoNaLista);
        campo = document.getElementById('listaAmigos');
        campo.innerHTML = (amigos);
        resultado.textContent = '';
        limparCampo();
    }
           
}
// Função apenas para limpar campo a cada nome digitado.
function limparCampo() {
    adicionarAmigoNaLista = document.querySelector('input');
    adicionarAmigoNaLista.value = '';
}
// Função para sortear.
function sortearAmigo() {
    // Primeiramente verifica se a lista está vazia e avisa o usuário.
    if (amigos.length === 0) {
        resultado.textContent = 'Você ainda não adicionou amigos a lista.';

    } else {
        // Metodo para escolher aleatóriamente um nome da lista e mostrar o resultado.
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];
    campo = document.getElementById('resultado');
    campo.innerHTML = (`Seu amigo secreto é : ${amigoSorteado}`);
    // Depois de sorteado limpa a lista para que o usuário possa digitar novamente sem precisar atualizar a página.
    amigos.length = 0;
    campo = document.getElementById('listaAmigos');
    campo.innerHTML = '';
    }

}