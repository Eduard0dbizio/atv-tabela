
function obterParametrosDaURL() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const email = params.get('email');
    const numero = params.get('numero');
    const curiosidade = params.get('curiosidade');
    return { nome, email, numero, curiosidade };
}

function gerarTabela() {
    const dados = obterParametrosDaURL();
    const tabelaContainer = document.getElementById('tabela-container');

    if (dados.nome && dados.email) {
        const tabelaHTML = `
            <table id="animada">
                <tr>
                    <th>Campo</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Nome</td>
                    <td>${dados.nome}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>${dados.email}</td>
                </tr>
                <tr>
                    <td>Telefone</td>
                    <td>${dados.numero}</td>
                </tr>
                <tr>
                    <td>Curiosidade</td>
                    <td>${dados.curiosidade}</td>
                </tr>
            </table>
        `;

        tabelaContainer.innerHTML = tabelaHTML;

        const tabela = document.getElementById('animada');
        setTimeout(() => {
            tabela.style.opacity = 1; 
        }, 100); 
    } else {
        tabelaContainer.innerHTML = '<p>Nenhum dado recebido!</p>';
    }
}

window.onload = gerarTabela;
