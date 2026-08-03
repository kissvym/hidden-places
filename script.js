alert("Скрипт работает!");
const places = {
    "Лес": {
        title: "Тихий лес",
        description: "Место для прогулки, где можно отдохнуть от города и побыть наедине с природой.",
        location: "Санкт-Петербург и окрестности",
        image: "./forest.jpg"
    },

    "Вода": {
        title: "Тихое место у воды",
        description: "Спокойное место у воды, где можно отдохнуть от городской суеты.",
        location: "Санкт-Петербург и Ленинградская область",
        image: "./water.jpg"
    },

    "Заброшенное": {
        title: "Заброшенное место",
        description: "Атмосферное место для тех, кому хочется чего-то необычного.",
        location: "Ленинградская область",
        image: "./abandoned.jpg"
    },

    "Красивый вид": {
        title: "Красивый вид",
        description: "Место, откуда можно посмотреть на природу и сделать красивые фотографии.",
        location: "Санкт-Петербург и Ленинградская область",
        image: "./view.jpg"
    },

    "Закат": {
        title: "Место для заката",
        description: "Тихое место, где особенно красиво вечером.",
        location: "Ленинградская область",
        image: "./sunset.jpg"
    }
};

let selectedPlace = null;


// Выбор места
function choosePlace(place) {

    selectedPlace = place;

    const choice = document.getElementById("choice");
    const peopleQuestion = document.getElementById("people-question");
    const recommendation = document.getElementById("recommendation");

    choice.innerHTML = `
        <div class="selected-place">
            <h3>Ты выбрал: ${place}</h3>
        </div>
    `;

    peopleQuestion.innerHTML = `
        <div class="people-choice">
            <h3>Сколько людей вокруг тебе комфортно?</h3>

            <button onclick="showRecommendation('quiet')">
                Почти никого
            </button>

            <button onclick="showRecommendation('people')">
                Немного людей
            </button>
        </div>
    `;

    recommendation.innerHTML = "";
}


// Показываем рекомендацию
function showRecommendation(level) {

    const place = places[selectedPlace];

    if (!place) {
        return;
    }

    const recommendation =
        document.getElementById("recommendation");

    let text = "";

    if (level === "quiet") {
        text = "Здесь обычно можно спокойно побыть наедине с собой.";
    }

    if (level === "people") {
        text = "Здесь может быть немного людей, но место всё равно подходит для спокойного отдыха.";
    }

    recommendation.innerHTML = `
        <div class="recommendation-card">

            <img
                src="${place.image}"
                alt="${place.title}"
                class="place-image"
            >

            <div class="place-info">

                <p class="small-title">
                    РЕКОМЕНДАЦИЯ
                </p>

                <h2>
                    ${place.title}
                </h2>

                <p>
                    ${place.description}
                </p>

                <p>
                    📍 ${place.location}
                </p>

                <p>
                    ${text}
                </p>

                <button onclick="alert('Подробная информация о месте появится здесь.')">
                    Посмотреть место
                </button>

            </div>

        </div>
    `;
}


// Кнопка «Найти место» на главном экране
function scrollToPlaces() {

    const placesSection =
        document.getElementById("places");

    placesSection.scrollIntoView({
        behavior: "smooth"
    });
}
     
   
                
