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



