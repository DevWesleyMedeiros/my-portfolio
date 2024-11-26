const flags = [...document.querySelectorAll(".country-flag > .flag")];

flags.forEach((flag) => {
    flag.addEventListener("click", (evt) => {
        const lang = evt.target.id;
        changeLanguage(lang);
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

(function () {
    const filterItems = document.querySelectorAll('.portifolio > .projects-list > .filter-project > .project');
    
    filterItems.forEach((filterItem) => {
        filterItem.addEventListener('click', (evt) => {
            const linkId = evt.target.id; 
            const cards = document.querySelectorAll(".portifolio > .center > .card"); 
            cards.forEach((card) => {
                card.classList.remove('hidden');
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
})();
