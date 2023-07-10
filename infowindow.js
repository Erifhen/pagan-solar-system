document.addEventListener("DOMContentLoaded", function () {

    const planets = document.querySelectorAll('.planet');
    const infoWindow = document.getElementById('info-window');


    planets.forEach(planet => {
        planet.addEventListener('click', () => {
            const planetName = planet.id;
            const planetInfo = getPlanetInfo(planetName);
            infoWindow.innerHTML = `<img src="${planetInfo.image}" alt="${planetName}"><p>${planetInfo.description}</p>`;
            infoWindow.style.display = 'block';
        });
        document.addEventListener('mouseleave', () => {
            infoWindow.style.display = 'none';
        })
    });


    function getPlanetInfo(planetName) {
        const planetInfoMap = {
            sun: { description: 'Mitra solis invictos: Vitorioso sobre o mal e patrono da justiça, fonte de luz e senhor dos acordos.', image: 'images/sun-info.jpg' },
            mercury: { description: 'Hermes trismegistus sapientis: Três vezes grande! Senhor dos segredos da humanidade e da filosofia.', image: 'images/mercury-info.png' },
            venus: { description: 'Venus victrix divina et gracilis: O poder de atração e desejo, senhora do amor e da fertilidade.', image: 'images/venus-info.jpg' },
            earth: { description: 'Gaia mater magna: Majestosa mãe Terra, a natureza geradora e mantenedora da vida.', image: 'images/earth-info.jpg' },
            moon: { description: 'Diana trisformis diva: Senhora da caça, é a natureza selvagem e o poder feminino, tem três faces distintas.', image: 'images/moon-info.jpg' },
            mars: { description: 'Marte bellator et audaz: O senhor da arte da guerra, guerreiro corajoso de habilidade incomparável.', image: 'images/mars-info.jpg' },
            jupiter: { description: 'Jupiter divinus pater: Sábio pai celestial, governante supremo sobre a justiça e poder cósmico.', image: 'images/jupiter-info.jpg' },
            saturn: { description: 'Saturno senex deos temporum: Ancião entre os anciões, guardião do tempo e senhor da mortalidade universal.', image: 'images/saturn-info.jpg' },
            uranus: { description: 'Uranus primordialis caeli aeternus: O céu primordial, a eternidade e a grandiosidade celeste.', image: 'images/uranus-info.jpg' },
            neptune: { description: 'Netuno aequor rector: Governante dos mares e dos oceanos, protetor dos navegantes e senhor dos fluxos emocionais.', image: 'images/neptune-info.jpg' },
            pluto: { description: 'Pluto regens umbras: Regente das sombras e dos mistérios profundos, é a transformação e o renascimento.', image: 'images/pluto-info.jpg' },
            nibiru: { description: 'Marduk nibiru tiamat vicit: Vencedor sobre desafios e adversidades, senhor do triunfo sobre as forças do caos.', image: 'images/nibiru-info.jpg' }
        };


        return planetInfoMap[planetName] || { description: 'No information available.', image: '' };
    };

});
