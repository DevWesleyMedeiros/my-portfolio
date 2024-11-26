import $ from 'jquery';

// Script que ativa idiomas diferentes no portifólio
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
// Fim do primeiro script -----

$(function () {
    $('.portifolio > .projects-list > .filter-project > .project').on('click', function(evt) {
        alert('clicado');
        const linkId = $(this).attr('id');
        const cards = $(".portifolio > .center > .card");
        cards.fadeIn().removeClass('hidden');
        if (linkId === "done") {
            cards.each(function() {
                if (!$(this).hasClass("finished")) {
                    $(this).fadeOut().addClass("hidden");
                }
            });
        } else if (linkId === "undone") {
            cards.each(function() {
                if (!$(this).hasClass("unfinished")) {
                    $(this).fadeOut().addClass("hidden");
                }
            });
        }
    })
})
