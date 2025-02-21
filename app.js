let listaNomeAmigos = [];


function adicionarAmigo(){
    let adicionar = document.querySelector('input').value;
    
    if(adicionar == ""){
        alert("Por favor insira um nome válido!");
        return;

    }else{
        listaNomeAmigos.push(adicionar);


    }
    adicionaListaAmigos();
    
    limparTerminal();
}


function adicionaListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for (let i=0; i<listaNomeAmigos.length; i++){
        let nome = listaNomeAmigos[i];
        let novoElemento = document.createElement('li')
        novoElemento.textContent = nome;

        lista.appendChild(novoElemento);
    }
    
}



function limparTerminal(){
   let adicionar = document.querySelector('input');
    adicionar.value = '';
}



function sortearAmigo(){

    if(listaNomeAmigos.length == 0){
        alert("Lista vazia! Por favor, adicione os nomes para serem sorteados.");
        return;

    }
    
    let indiceNomeSorteado = Math.floor(Math.random() * listaNomeAmigos.length);
    let nomeSorteado = listaNomeAmigos[indiceNomeSorteado];

    let nome = document.getElementById('resultado');
    nome.innerHTML = `O nome sorteado foi ${nomeSorteado}`;
}