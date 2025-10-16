const textarea = document.getElementById('userText');
const charCount = document.getElementById('charCount');
const screamBtn = document.getElementById('screamBtn');
const voidTransition = document.getElementById('voidTransition');
const voidMessage = document.getElementById('voidMessage');

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  charCount.textContent = `${length}/100000`;
});

function triggerVoid() {
  voidTransition.classList.add('active');
  voidMessage.textContent = "Your thoughts are drifting into the darkness... 🌌";

  setTimeout(() => {
    voidMessage.textContent = "Gone. Completely gone. 🕳️";
  }, 1200);

  setTimeout(() => {
    voidTransition.classList.remove('active');
    textarea.value = "";
    charCount.textContent = "0/100000";
  }, 2200);
}

screamBtn.addEventListener('click', () => {
  if (textarea.value.trim() === "") {
    alert("The Void cannot echo silence...");
  } else {
    triggerVoid();
  }
});
