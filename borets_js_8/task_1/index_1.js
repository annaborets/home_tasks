const textField = document.querySelector('.text');
const parent = document.querySelector('.root');
let newDiv = document.createElement('DIV');
let cmdIsPressed;


addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        cmdIsPressed = true;
    }
});
addEventListener('keyup', (event) => {
    if (event.ctrlKey || event.metaKey) {
        cmdIsPressed = false;
    }
})

addEventListener('keydown', (event) => {
    if (!cmdIsPressed || event.code !== 'KeyE' || document.getElementsByTagName('textarea').length > 0) {
        return;
    } else if (cmdIsPressed && event.code == 'KeyE') {
        let textArea = document.createElement('TEXTAREA');
        textArea.innerHTML = newDiv.innerHTML
        newDiv.innerHTML = '';
        parent.append(textArea);
        textField.remove();
    }

})


addEventListener('keydown', (event) => {
    if (!cmdIsPressed || event.code !== 'Equal' || document.getElementsByTagName('textarea').length == 0) {
        return;

    } else if (cmdIsPressed && event.code == 'Equal') {
        parent.append(newDiv);
        let textArea = document.getElementsByTagName('textarea')[0];
        newDiv.innerHTML = textArea.value;
        textArea.remove();
    }
})
