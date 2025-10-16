// Handle image upload
document.getElementById('uploadBtn').addEventListener('click', () => {
  document.getElementById('uploadPic').click();
});

document.getElementById('uploadPic').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('profilePic').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Save "About You" info
document.getElementById('saveAbout').addEventListener('click', () => {
  const aboutText = document.querySelector('.about textarea').value.trim();
  if (aboutText) {
    alert(`Saved: "${aboutText}"`);
  } else {
    alert("Please write something about yourself!");
  }
});

// Save mood
document.getElementById('saveMood').addEventListener('click', () => {
  const mood = document.getElementById('moodSelect').value;
  if (mood) {
    alert(`Mood submitted: ${mood}`);
  } else {
    alert("Please select your mood first!");
  }
});
const customizerBtn = document.getElementById('customizerBtn');
const customizerPanel = document.getElementById('customizerPanel');
const bgPicker = document.getElementById('bgColorPicker');
const textPicker = document.getElementById('textColorPicker');
const fontSelect = document.getElementById('fontSelect');

// Toggle panel visibility
customizerBtn.addEventListener('click', () => {
  customizerPanel.style.display =
    customizerPanel.style.display === 'flex' ? 'none' : 'flex';
});

// Change background color
bgPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

// Change text color
textPicker.addEventListener('input', (e) => {
  document.body.style.color = e.target.value;
});

// Change font family
fontSelect.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});
document.getElementById('signOutBtn').addEventListener('click', function(event) {
  const confirmSignOut = confirm("Are you sure you want to sign out?");
  if (!confirmSignOut) {
    event.preventDefault(); // cancel navigation if user clicks Cancel
  }
});