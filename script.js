function toggleTheme() {
  document.body.classList.toggle('dark');
  document.getElementById('themeBtn').innerText = 
    document.body.classList.contains('dark') ? '☀️' : '🌙';
}