const noticias = [
    {
        titulo: "Distribuição dos materiais escolares",
        chamada: "Igualdade, qualidade e responsabilidade. (Leia mais)",
        categoria: "outros"
    }
];

const renderizarCards = () => {
    const secaoPrincipal = document.querySelector('main');

    const cardHTML = noticias.map(item => `
        <section class="news-card ${item.categoria}">
            <a href="src/pages/${item.titulo}/page.html">
                <img class="card-bg" src="src/pages/${item.titulo}/cover.jpeg" alt="${item.titulo}">
                <section class="card-cover">
                    <h2>${item.titulo}</h2>
                    <span>${item.chamada}</span>
                </section>
            </a>
        </section>
    `).join('');

    secaoPrincipal.innerHTML = cardHTML;
};

renderizarCards();