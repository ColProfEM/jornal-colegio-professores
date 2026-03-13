const noticias = [
    {
        titulo: "Distribuição dos materiais escolares",
        chamada: "Igualdade, qualidade e responsabilidade. (Leia mais)",
        imagem: "./src/img/distribuicao-dos-materiais-escolares.png",
        categoria: "outros"
    }
];

const renderizarCards = () => {
    const secaoPrincipal = document.querySelector('main');

    const cardHTML = noticias.map(item => `
        <section class="news-card ${item.categoria}">
            <img class="card-bg" src="${item.imagem}" alt="${item.titulo}">
            <section class="card-cover">
                <h2>${item.titulo}</h2>
                <span>${item.chamada}</span>
            </section>
        </section>
    `).join('');

    secaoPrincipal.innerHTML = cardHTML;
};

renderizarCards();