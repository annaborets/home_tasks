const resizable = document.querySelector('.resizable');
const resizer = document.querySelector('.resizer');

let startX, startY, startWidth, startHeight;

const initDrag = (event) => {
    startX = event.clientX;
    startY = event.clientY;
    startWidth = parseInt(window.getComputedStyle(resizable).width, 10);
    startHeight = parseInt(window.getComputedStyle(resizable).height, 10);

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
}

const doDrag = (event) => {
    resizable.style.width = (startWidth + event.clientX - startX) + 'px';
    resizable.style.height = (startHeight + event.clientY - startY) + 'px';
}

const stopDrag = () => {
    document.removeEventListener('mousemove', doDrag)
    document.removeEventListener('mouseup', stopDrag);
};

resizer.addEventListener('mousedown', initDrag);
