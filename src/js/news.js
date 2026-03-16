const noticias = [
    {
        titulo: "Resumo da semana (09-13 de Março)",
        chamada: "(Assista)",
        categoria: "cotidiano-escolar"
    },
    {
        titulo: "Resumo da semana (02-06 de Março)",
        chamada: "(Assista)",
        categoria: "cotidiano-escolar"
    },
    {
        titulo: "Dia da Mulher",
        chamada: "Nossa homenagem a todas as mulheres. (Leia mais)",
        categoria: "datas-especiais"
    },
    {
        titulo: "Distribuição dos materiais escolares",
        chamada: "Igualdade, qualidade e responsabilidade. (Leia mais)",
        categoria: "cotidiano-escolar"
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