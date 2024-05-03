function animarLogo() {
    const logo = document.querySelector('header img');
    logo.style.animation = 'spin 2s linear infinite';
}

function pesquisar() {
    const termoPesquisa = document.getElementById('termo-pesquisa').value.toLowerCase();
    const catalogos = document.querySelectorAll('.catalogo');

    catalogos.forEach(catalogo => {
        const itens = catalogo.querySelectorAll('h3');
        let encontrado = false;
        
        itens.forEach(item => {
            const textoItem = item.innerText.toLowerCase();
            if (textoItem.includes(termoPesquisa)) {
                encontrado = true;
            }
        });

        if (encontrado) {
            catalogo.style.display = 'block';
        } else {
            catalogo.style.display = 'none';
        }
    });
}