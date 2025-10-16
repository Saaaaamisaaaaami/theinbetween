// Submit Vertical Form
document.getElementById("submitBtn").addEventListener("click", () => {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const guardianName = document.getElementById("guardianName").value.trim();
  const guardianEmail = document.getElementById("guardianEmail").value.trim();
  const guardianDob = document.getElementById("guardianDob").value.trim();

  if (!fullName || !email || !dob || !guardianName || !guardianEmail || !guardianDob) {
    alert("Please fill out all your fields!");
    return;
  }

  alert("Form submitted successfully!");
  localStorage.setItem("userData", JSON.stringify({fullName,email,dob,guardianName,guardianEmail,guardianDob}));
});

// Avatar Upload
const avatarBtn = document.getElementById("avatarBtn");
const avatarUpload = document.getElementById("avatarUpload");
const avatarImage = document.getElementById("avatarImage");

avatarBtn.addEventListener("click", () => avatarUpload.click());
avatarUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => avatarImage.src = e.target.result;
    reader.readAsDataURL(file);
  }
});

// Sign-in Button
document.getElementById("signInBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const repeatPassword = document.getElementById("repeatPassword").value.trim();

  if (!username || !password || !repeatPassword) {
    alert("Please fill in all login fields!");
    return;
  }
  if (password !== repeatPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Welcome, ${username}!`);
  window.location.href = "homepage.html";
});
