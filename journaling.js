// --- Questions save/load ---
const questions = ['q1','q2','q3'];
questions.forEach(id => {
  const q = document.getElementById(id);
  q.value = localStorage.getItem(id) || '';
  q.addEventListener('input', () => localStorage.setItem(id, q.value));
});

// Submit Questions
document.getElementById('submitQuestions').addEventListener('click', () => {
  questions.forEach(id => {
    localStorage.setItem(id, document.getElementById(id).value);
  });
  alert('Questions submitted successfully!');
});

// --- Multi-page Journal save/load ---
const journalText = document.getElementById('journalText');
let page = parseInt(localStorage.getItem('journalPage') || 1);

// Load current page content
function loadPage() {
  journalText.value = localStorage.getItem(`journalPage${page}`) || '';
  document.querySelector('.journal-header p').innerText = `Write. Page ${page}.`;
}

// Save current page content
function savePage() {
  localStorage.setItem(`journalPage${page}`, journalText.value);
}

// --- Toolbar buttons ---
function insertTag(tagStart, tagEnd) {
  const start = journalText.selectionStart;
  const end = journalText.selectionEnd;
  const selected = journalText.value.substring(start, end);
  const before = journalText.value.substring(0, start);
  const after = journalText.value.substring(end);
  journalText.value = before + tagStart + selected + tagEnd + after;
}

document.getElementById('boldBtn').addEventListener('click', () => insertTag('**', '**'));
document.getElementById('italicBtn').addEventListener('click', () => insertTag('*', '*'));
document.getElementById('underlineBtn').addEventListener('click', () => insertTag('<u>', '</u>'));
document.getElementById('emojiBtn').addEventListener('click', () => insertTag('😊', ''));
document.getElementById('imageBtn').addEventListener('click', () => insertTag('[Image]', ''));

// Save/Submit buttons
document.getElementById('saveJournal').addEventListener('click', () => {
  savePage();
  alert(`Page ${page} saved!`);
});
document.getElementById('submitJournal').addEventListener('click', () => {
  savePage();
  alert(`Page ${page} submitted!`);
});

// Page navigation
document.getElementById('prevPage').addEventListener('click', () => {
  if(page > 1) {
    savePage();
    page--;
    localStorage.setItem('journalPage', page);
    loadPage();
  }
});

document.getElementById('nextPage').addEventListener('click', () => {
  savePage();
  page++;
  localStorage.setItem('journalPage', page);
  loadPage();
});

// Initialize first load
loadPage();