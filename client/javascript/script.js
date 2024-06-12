document.getElementById('toggleButton').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('active');
});