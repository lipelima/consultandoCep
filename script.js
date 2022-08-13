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