
function myFunction() {
    var element = document.getElementById("btnDark");
    element.classList.toggle("dark-mode");
 }

function zerarCampo() {
    document.querySelector('#cep').value=("");
}

function escondeCampo(){
    document.querySelector('#cep').style.display= "none";
    document.querySelector('#btn').style.display= "none";
    document.querySelector('#titulo').style.display= "none";
}

function btnRetorno(){
    location.reload();
}


function consultAddress() {

    let valorCep = document.querySelector('#cep').value;
    let cep = valorCep.replace(/\.|\-/g, '');

    if (cep != '' && cep.length == 8){

        let url = `http://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(response => response.json()).then(showAddress);
       
    }else{
        zerarCampo();
        alert('Campo vazio ou formato inválido! Coloque o CEP!');
        return;  
    }  
}


function showAddress(dados) {

    let resultado = document.querySelector('#resultado');

    if (dados.erro) {
        resultado.innerHTML = "Não foi possivel localizar o endereço";
    } else {
        escondeCampo();   
        resultado.innerHTML = ` <p class= "subtitulo">Cep:</p> ${dados.cep}
                                <p class= "subtitulo">Endereço:</p> ${dados.logradouro}
                                <p class= "subtitulo">Bairro:</p> ${dados.bairro}</p>
                                <p class= "subtitulo">Localidade:</p> ${dados.localidade} - ${dados.uf}
                                <p class= "subtitulo">DDD:</p> ${dados.ddd}</p> 
                                <button onclick="btnRetorno()" id="btnVoltar"> Voltar </button>`                           
    }   
}



