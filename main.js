const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const contactBtn = document.getElementById('contactBtn');
const funFactBtn = document.getElementById('funFactBtn');
const detailsSection = document.getElementById('details');
const toast = document.getElementById('toast');

const funFacts = [
  'GNU / Linux is better than only GNU or only Linux.',
  'Open source means everyone can learn, modify, and share the project.',
  'A friendly portfolio should be fast, accessible, and easy to read.',
];

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('visible');

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove('visible');
    toast.classList.add('hidden');
  }, 3200);
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark-theme');
  const isDark = document.documentElement.classList.contains('dark-theme');
  toggleThemeBtn.textContent = isDark ? 'Switch to Light Mode' : 'Toggle Dark Mode';
  showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled');
}

function toggleContactInfo() {
  detailsSection.classList.toggle('hidden');
  const visible = !detailsSection.classList.contains('hidden');
  contactBtn.textContent = visible ? 'Hide Contact Info' : 'Show Contact Info';
}

function revealFunFact() {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  showToast(randomFact);
}

function attachListItemEvents() {
  const listItems = document.querySelectorAll('#profileItems li');
  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      showToast(`Selected: ${item.textContent}`);
    });
  });
}

toggleThemeBtn.addEventListener('click', toggleTheme);
contactBtn.addEventListener('click', toggleContactInfo);
funFactBtn.addEventListener('click', revealFunFact);
attachListItemEvents();
