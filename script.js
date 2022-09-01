function consultAddress() {

    let cep = document.querySelector('#cep').value;


    if (cep.length === 8) {

        const url = `http://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(response => response.json()).then(showAddress);
             
    }else{
        alert('CEP Invalido!');
        return;
    }
    
}


function porEndereco() {

    let logradouro = document.querySelector('#logradouro').value;
    let uf = document.querySelector('#uf').value;
    let localidade = document.querySelector('#localidade').value;

    const url = `http://viacep.com.br/ws/${uf}/${logradouro}/${localidade}/json/`;

    fetch(url).then(response => response.json()).then(showAddress2);
    
}

function showAddress2(dados) {
    let resultado = document.querySelector('#resultado');

    if (dados.erro) {
        resultado.innerHTML = "Não foi possivel localizar endereço";
    } else {
        resultado.innerHTML = `<p>Cep: ${dados.cep}</p>`
    }
}


function showAddress(dados) {
    let resultado = document.querySelector('#resultado');

    if (dados.erro) {
        resultado.innerHTML = "Não foi possivel localizar endereço";
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                                <p>Complemento: ${dados.complemento}</p>
                                <p>Bairro: ${dados.bairro}</p>
                                <p>Localidade: ${dados.localidade} - ${dados.uf}</p>`
    }
}
