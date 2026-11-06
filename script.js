document.documentElement.classList.add('js-enabled');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);

const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

form.addEventListener('submit', event => {
  event.preventDefault();
  // В учебном проекте нет сервера: проверяем поля, но не отправляем заявку.
  formStatus.textContent = 'Форма заполнена верно. Это демонстрация: данные не отправлены.';
});

form.addEventListener('input', () => {
  formStatus.textContent = '';
});
form.addEventListener('change', () => {
  formStatus.textContent = '';
});
