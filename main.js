const inputI = document.querySelector('.input-i');
const buttonI = document.querySelector('.button-i');
const ulMainI = document.querySelector('.ul-main-i');

let savedUrls = [];

buttonI.addEventListener('click', buttonISubmit);

function createListItem(url) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.className = 'p-i';
    li.className = 'li-i';
    p.textContent = `- ${url}`;
    li.appendChild(p);
    ulMainI.appendChild(li);

    li.addEventListener('click', function () {
        ulMainI.removeChild(li);

        const index = savedUrls.indexOf(url);
        if (index !== -1) {
            savedUrls.splice(index, 1);
            localStorage.setItem('savedUrls', JSON.stringify(savedUrls));
        }
    });
}

function buttonISubmit() {
    const inputValue = inputI.value.trim();
    if (inputValue) {
        createListItem(inputValue);
        savedUrls.push(inputValue);
        localStorage.setItem('savedUrls', JSON.stringify(savedUrls));
        inputI.value = '';
    }
}

function loadSavedUrls() {
    savedUrls = JSON.parse(localStorage.getItem('savedUrls') || '[]');
    savedUrls.forEach(url => {
        createListItem(url);
    });
}

loadSavedUrls();
