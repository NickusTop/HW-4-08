const bookmarkInput = document.getElementById('bookmarkInput');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const bookmarkList = document.getElementById('bookmarkList');

addBookmarkBtn.addEventListener("click", addBookmark)

const BookMarks = [];
function addBookmark() {
    const url = bookmarkInput.value.trim();
    if (url.includes('http://') || url.includes('https://')) {
        BookMarks.push(url);
        localStorage.setItem('bookmarks', JSON.stringify(BookMarks));
        renderBookmarks();
        bookmarkInput.value = '';
    } else {
        alert('Будь ласка, введіть URL.');
}
}
function renderBookmarks() {
    bookmarkList.innerHTML = '';
    BookMarks.forEach((url, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = url;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'button delete';
        deleteBtn.addEventListener('click', () => deleteBookmark(index));

        listItem.appendChild(deleteBtn);
        bookmarkList.appendChild(listItem);
        return deleteBtn;
    });
    deleteBtn.addEventListener("click", deleteBookmark)
}
function deleteBookmark(index) {
    BookMarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(BookMarks));
    renderBookmarks();
}