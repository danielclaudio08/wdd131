const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

function updateMenuIcon() {
  menuButton.textContent = nav.classList.contains('open') ? '❌' : '☰';
}

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  updateMenuIcon();

  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  if (nav.classList.contains('open')) {
    main.style.transform = 'translateY(250px)';
    footer.style.transform = 'translateY(250px)';
  } else {
    main.style.transform = '';
    footer.style.transform = '';
  }
});

updateMenuIcon();

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;