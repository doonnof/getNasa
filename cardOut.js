import {get} from "./get.js";


    const cards = document.querySelector('.cards') // Обращение к контейнеру "карточки"
    const getPhotos = get().photos;// Записываем вызов функции в переменную
    getPhotos.forEach(element =>  { // Перебор полученного объекта(массива)

        const card = document.createElement('div') // создание контейнера одной карточки
        card.classList.add('card') // добавление класса к карточке

        card.innerHTML = `
        <div class="card_full_name">Полное название: ${element.camera.full_name}</div>
        <div class="card_name">Название: ${element.camera.name}</div>
        <div class="card_date">Дата: ${element.earth_date}</div>
        <div class="card_image"><img src="${element.img_src}"} class="image"></div>
    `// Помещаем данные внутрь карточки

        cards.append(card); // добавление получившейся карточки в контейнер cards
    }, getPhotos);
