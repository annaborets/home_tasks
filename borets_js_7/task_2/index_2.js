/*Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити".
Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.*/

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
