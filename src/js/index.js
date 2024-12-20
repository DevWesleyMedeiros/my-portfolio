// Script que altera o idioma do projeto
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

// Filtro do cards de projetos
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

    // Slider inicial
    function sliderTop() {
        const sliders = [
            document.getElementById("i1"),
            document.getElementById("i2"),
            document.getElementById("i3"),
        ];
    
        let sliderAtual = 0;
        const sliderMaximo = sliders.length - 1;
    
        $(sliders[sliderAtual]).fadeTo(1000, 1);
    
        function changeSliders() {
            $(sliders[sliderAtual]).fadeOut(500, function () {
                sliderAtual = (sliderAtual + 1) > sliderMaximo ? 0 : sliderAtual + 1;
                $(sliders[sliderAtual]).fadeTo(1000, 1);
            });
        }
        setInterval(changeSliders, 6000);
    }
    sliderTop();

    // Script que muda o tema do portifolio
    const $switch = $('.switch');
    const $body = $('body');
      
    if (localStorage.getItem("theme") === "dark-theme") {
        $body.addClass("dark-theme");
        $switch.prop("checked", true);
    }
      
    $switch.on("change", function () {
        if ($switch.is(":checked")) {
            $body.addClass("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            $body.removeClass("dark-theme");
            localStorage.setItem("theme", "light");
        }
    });
})();
