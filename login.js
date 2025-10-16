document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const repeatPassword = document.getElementById("repeatPassword").value.trim();

  // Check if all fields are filled
  if (!username || !password || !repeatPassword) {
    alert("Please fill in all fields before logging in!");
    return;
  }

  // Check if passwords match
  if (password !== repeatPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Everything looks good — redirect to homepage
  alert(`Welcome back, ${username}!`);
  window.location.href = "homepage.html";
});
