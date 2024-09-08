function pesquisar() {
    const termoPesquisa = document.querySelector("#campo-pesquisa").value.trim().toLowerCase();
    const resultados = document.querySelector("#resultados-pesquisa");
    const body = document.body;
    resultados.innerHTML = "";

    if (termoPesquisa === "") {
        resultados.innerHTML = "<p>Digite um termo para pesquisar.</p>";
        resultados.classList.remove('visible'); // Oculta os resultados quando a pesquisa está vazia
        body.style.backgroundImage = ""; // Remove a imagem de fundo
        return;
    }

    const planetaEncontrado = planetas.find(planeta =>
        planeta.nome.toLowerCase().startsWith(termoPesquisa)
    );

    if (planetaEncontrado) {
        resultados.innerHTML = `
            <div class="planeta">
                <h2>${planetaEncontrado.nome}</h2>
                <p>${planetaEncontrado.curiosidade}</p>
                <a href="${planetaEncontrado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        resultados.classList.add('visible'); // Exibe os resultados
        body.style.backgroundImage = `url('imagens/${planetaEncontrado.nome.toLowerCase()}.jpg')`;
    } else {
        resultados.innerHTML = "<p>Planeta não encontrado. Tente outro nome.</p>";
        resultados.classList.remove('visible'); // Oculta os resultados se não houver correspondência
        body.style.backgroundImage = ""; // Remove a imagem de fundo
    }
}
