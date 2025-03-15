document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Отключение стандартного поведения формы
    window.location.href = "main.html"; // Переход на главную страницу
});