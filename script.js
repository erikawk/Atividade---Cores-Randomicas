function trocarCorRandom(){
    var caracteres = "0123456789ABCDEF"; 
    var combinacoes = "#";

    for(let i = 0; i < 6; i++){
        combinacoes += caracteres[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = combinacoes; 
    var corRandom = document.querySelector("#corRandom");
    corRandom.innerHTML = combinacoes;    
}

function trocarCor(){
    var listaCores = ["red", "green", "blue", "purple", "orange", "pink"];
    var lista = ""; 

    for(let i = 0; i < listaCores.length; i++){
        lista = listaCores[Math.floor(Math.random() * i)];  
    }

    document.body.style.background = lista; 
    var cor = document.querySelector("#cor");
    cor.innerHTML = lista;  
}

function coresRandomicas(){
    let pagRandom = document.getElementById("pagRandom");
    pagRandom.style.display = "block";
    let pagNome = document.getElementById("pagNome");
    pagNome.style.display = "none";
}

function coresNomes(){
    let pagNome = document.getElementById("pagNome");
    pagNome.style.display = "block";
    let pagRandom = document.getElementById("pagRandom");
    pagRandom.style.display = "none";
}

function mudaCorRandom(){
    let pagRandom = document.getElementById("pagRandom");
    pagRandom.style.background = "purple";
}