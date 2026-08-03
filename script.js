const places = {
    forest: {
        quiet: {
            title: "Тихий лес",
            description:
                "Место для прогулки, где можно отдохнуть от города и побыть наедине с природой.",
            location: "Санкт-Петербург и окрестности",
            image: "./forest.jpg"
        },
        people: {
            title: "Лес для прогулки",
            description:
                "Красивое место для спокойной прогулки среди деревьев.",
            location: "Санкт-Петербург и окрестности",
            image: "./forest.jpg"
        }
    },

    lake: {
        quiet: {
            title: "Тихое озеро",
            description:
                "Спокойное место у воды, где можно посидеть и насладиться природой.",
            location: "Санкт-Петербург и Ленинградская область",
            image: "./forest.jpg"
        },
        people: {
            title: "Озеро для отдыха",
            description:
                "Подойдёт для прогулки и отдыха на природе.",
            location: "Ленинградская область",
            image: "./forest.jpg"
        }
    }
};


let selectedPlace = null;
let selectedLevel = null;


// Выбор типа места
function selectPlace(place) {
    selectedPlace = place;

    const choice = document.getElementById("choice");

    if (place === "forest") {
        choice.textContent = "Вы выбрали: лес";
    }

    if (place === "lake") {
        choice.textContent = "Вы выбрали: озеро";
    }

    if (place === "park") {
        choice.textContent = "Вы выбрали: парк";
    }

    if (place === "beach") {
        choice.textContent = "Вы выбрали: пляж";
    }

    if (place === "mountain") {
        choice.textContent = "Вы выбрали: горы";
    }
}


// Выбор количества людей
function selectLevel(level) {
    selectedLevel = level;

    const levelChoice = document.getElementById("level-choice");

    if (level === "quiet") {
        levelChoice.textContent = "Почти никого";
    }

    if (level === "people") {
        levelChoice.textContent = "Немного людей";
    }

    showPlace();
}


// Показываем карточку
function showPlace() {

    if (!selectedPlace || !selectedLevel) {
        return;
    }

    const placeData =
        places[selectedPlace]?.[selectedLevel];

    if (!placeData) {
        return;
    }

    let result = document.getElementById("place-result");

    if (!result) {
        result = document.createElement("div");
        result.id = "place-result";
        result.className = "place-result";

        document.querySelector(".choice-level").appendChild(result);
    }

    result.innerHTML = `
        <div class="place-card">

            <img
                src="${placeData.image}"
                alt="${placeData.title}"
                class="place-image"
            >

            <div class="place-info">

                <h3>${placeData.title}</h3>

                <p>${placeData.description}</p>

                <p class="place-location">
                    📍 ${placeData.location}
                </p>

                <button onclick="alert('Подробнее о месте скоро появится!')">
                    Посмотреть место
                </button>

            </div>

        </div>
    `;
}
