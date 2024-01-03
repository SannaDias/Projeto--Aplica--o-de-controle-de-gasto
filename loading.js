function showLoading (){
    //representa a div que eu preciso pra mostrar o componente de loading
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");
    
    //criando a label para o carregamento ao registrar
    const label = document.createElement("label");
    label.innerText = "Carregando..."

    div.appendChild(label);

    document.body.appendChild(div);

    //setTimeout(() => hideLoading(), 2000); //setar o tempo que ira aparecer o alert na tela
}

function hideLoading () {
    const loadings = document.getElementsByClassName("loading"); //recebe a lista de items com essa class
    //se a classe loading tiver um tamano
    if(loadings.length){
        loadings[0].remove(); //remove o primeiro elemento da lista
    }
}