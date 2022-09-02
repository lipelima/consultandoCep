function porEndereco() {

    let logradouro = document.querySelector('#logradouro').value;
    let uf = document.querySelector('#uf').value;
    let localidade = document.querySelector('#localidade').value;

    let url = `http://viacep.com.br/ws/${uf}/${logradouro}/${localidade}/json/`;

    fetch(url).then(response => response.json()).then(showAddress2);
    
}

function showAddress2(dados2) {
    let resultado2 = document.querySelector('#resultado2');

    if (dados2.erro) {
        resultado2.innerHTML = "Não foi possivel localizar endereço";
    } else {
        resultado2.innerHTML = `<p>Cep: ${dados2.cep}</p>`
    }
};