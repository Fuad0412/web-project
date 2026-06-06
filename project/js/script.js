// მარტივი ფილტრი ცხოველების გვერდისთვის
const filterButtons = document.querySelectorAll('[data-filter]');
const animals = document.querySelectorAll('.animal-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.getAttribute('data-filter');
    animals.forEach(card => {
      const sameType = card.getAttribute('data-type') === type;
      card.classList.toggle('hidden', type !== 'all' && !sameType);
    });
  });
});



// ფორმის მარტივი შეტყობინება
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('გმადლობთ, თქვენი განაცხადი მიღებულია.');
    form.reset();
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}