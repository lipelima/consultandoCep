function zerarCampo() {
    document.querySelector('#cep').value=("");
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
        resultado.innerHTML = "Não foi possivel localizar endereço";
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                                <p>Bairro: ${dados.bairro}</p>
                                <p>Localidade: ${dados.localidade} - ${dados.uf}</p>`
                                
    }
}











function porEndereco() {

    let logradouro = document.querySelector('#logradouro').value;
    let uf = document.querySelector('#uf').value;
    let localidade = document.querySelector('#localidade').value;

    let url2 = `http://viacep.com.br/ws/${uf}/${logradouro}/${localidade}/json/`;

    fetch(url2).then(response => response.json()).then(showAddress2);
    
}

function showAddress2(dados) {
    
    let resultado = document.querySelector('#resultado2');

    if (dados.erro) {
        resultado.innerHTML = "Não foi possivel localizar endereço";
    } else {
        resultado.innerHTML = `<p>Cep: ${dados.cep}</p>`
    }

};




