const btn = document.getElementById('changeBtn');
const myElements = document.querySelectorAll('.stoplight__item');

btn.addEventListener('click', () => {
    const currentActive = [...myElements].find((el) => el.classList.contains('stoplight__item_active'));

    if (!currentActive) {
        myElements[0].classList.add('stoplight__item_active')
        return;
    }

    const nextActive = currentActive.nextElementSibling || myElements[0];

    currentActive.classList.remove('stoplight__item_active');
    nextActive.classList.add('stoplight__item_active');
});
