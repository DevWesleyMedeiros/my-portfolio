const flags = [...document.querySelectorAll(".country-flag > .flag")];
const linksProjects = [...document.querySelectorAll(".portifolio > .projects-list > .filter-project > .project")];

flags.forEach((flag) => {
    flag.addEventListener("click", (evt) => {
        const lang = evt.target.id;
        changeLanguage(lang);
    });
});

linksProjects.forEach((link) => {
    link.addEventListener("click", (evt) => {
        const cards = [...document.querySelectorAll(".portifolio > .center > .card")];
        let linkId = evt.target.id;

        cards.forEach((card) => {
            card.classList.remove("hidden");
        });

        if (linkId === "done") {
            cards.forEach((card) => {
                if (!card.classList.contains("finished")) {
                    card.classList.add("hidden");
                }
            });
        } else if (linkId === "undone") {
            cards.forEach((card) => {
                if (!card.classList.contains("unfinished")) {
                    card.classList.add("hidden");
                }
            });
        }
    });
});

function changeLanguage(lang) {
    if (lang === 'United-states') {
        window.location.href = 'english.html';
    } else if (lang === 'Spain') {
        window.location.href = 'spanish.html';
    } else {
        window.location.href = 'index.html';
    }
}
