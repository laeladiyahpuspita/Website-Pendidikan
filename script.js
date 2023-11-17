document.getElementById('home').addEventListener('click', function() {
    showContent;
});

document.getElementById('content').addEventListener('click', function() {
    showContent;
});

document.getElementById('about').addEventListener('click', function() {
    showContent;
});

function showContent(content) {
    document.getElementById('content-section').innerHTML = `<p>${content}</p>`;
}