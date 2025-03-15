
function toggleMenu() {
    var menu = document.getElementById('user-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.getElementById("logoutButton").addEventListener("click", function() {
    window.location.href = './index.html';
});
function toggleSidebarMenu() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.classList.toggle('active');
}
function toggleSidebarMenu() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.classList.toggle('active'); // Переключение класса активного состояния
}