let selectedPlace = "";

let selectedPeople = "";


/* =========================
   КНОПКА "НАЙТИ МЕСТО"
========================= */

function scrollToPlaces() {

    document
        .getElementById("places")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   ВЫБОР МЕСТА
========================= */

function choosePlace(place) {

    selectedPlace = place;

    document.getElementById("choice").innerHTML = `
        <strong>Ты выбрал(а):</strong> ${place}
    `;


    selectedPeople = "";

    document.getElementById("recommendation").innerHTML = "";

    document.getElementById("people-question").innerHTML = `

        <h3>
            Насколько безлюдное место?
        </h3>

        <div class="filters">

            <button onclick="choosePeople('Очень мало')">
                🟢 Почти никого
            </button>

            <button onclick="choosePeople('Иногда встречаются люди')">
                🟡 Иногда встречаются люди
            </button>

            <button onclick="choosePeople('Людей бывает больше')">
                🔴 Людей бывает больше
            </button>

        </div>

        <p id="people-choice"></p>

    `;


    document
        .getElementById("people-question")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =========================
   ВЫБОР КОЛИЧЕСТВА ЛЮДЕЙ
========================= */

function choosePeople(people) {

    selectedPeople = people;

    document.getElementById("people-choice").textContent =
        "Выбрано: " + people;

    showRecommendation();

}


/* =========================
   РЕКОМЕНДАЦИЯ
========================= */

function showRecommendation() {

    let title = "";

    let description = "";

    let location = "📍 Санкт-Петербург и область";


    /* ЛЕС */

    if (selectedPlace === "Лес") {

        title = "🌲 Тихий лес у озера";

        description =
            "Тихое место среди деревьев, где можно погулять, посидеть у воды и отдохнуть от города.";

    }


    /* ВОДА */

    else if (selectedPlace === "Вода") {

        title = "🌊 Тихий берег";

        description =
            "Спокойное место у воды, где можно послушать шум волн, прогуляться вдоль берега и побыть наедине с природой.";

    }


    /* ЗАБРОШЕННОЕ */

    else if (selectedPlace === "Заброшенное") {

        title = "🏚️ Старое заброшенное место";

        description =
            "Атмосферное место с заброшенными зданиями и следами прошлого. Подходит для прогулки и необычных фотографий.";

    }


    /* КРАСИВЫЙ ВИД */

    else if (selectedPlace === "Красивый вид") {

        title = "🏞️ Место с красивым видом";

        description =
            "Точка с красивым природным пейзажем, где можно спокойно посидеть, сделать фотографии и насладиться видом.";

    }


    /* ЗАКАТ */

    else if (selectedPlace === "Закат") {

        title = "🌅 Место для красивого заката";

        description =
            "Открытое место с хорошим видом на горизонт. Особенно красиво вечером, когда солнце начинает садиться.";

    }


    document.getElementById("recommendation").innerHTML = `

        <div class="recommendation-card">

            <p class="small-title">
                РЕКОМЕНДАЦИЯ ДЛЯ ТЕБЯ
            </p>

            <h2>
                ${title}
            </h2>

            <p>
                ${location}
            </p>

            <p>
                ${description}
            </p>

            <p>
                👥 ${selectedPeople}
            </p>

            <p>
                ✨ Подходит для спокойного отдыха
            </p>

        </div>

    `;


    document
        .getElementById("recommendation")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}