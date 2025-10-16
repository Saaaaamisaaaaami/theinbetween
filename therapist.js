// Get buttons
const emailBtn = document.getElementById("emailBtn");
const chatBtn = document.getElementById("chatBtn");
const callBtn = document.getElementById("callBtn");

// Get modals
const emailModal = document.getElementById("emailModal");
const chatModal = document.getElementById("chatModal");
const callModal = document.getElementById("callModal");

// Get all close buttons
const closeButtons = document.querySelectorAll(".close");

// Open modals on button click
emailBtn.onclick = () => emailModal.style.display = "block";
chatBtn.onclick = () => chatModal.style.display = "block";
callBtn.onclick = () => callModal.style.display = "block";

// Close modal when 'x' clicked
closeButtons.forEach(btn => {
  btn.onclick = () => btn.parentElement.parentElement.style.display = "none";
});

// Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Chat input (basic simulation)
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

if (chatInput) {
  chatInput.addEventListener("keypress", e => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
      const message = document.createElement("p");
      message.textContent = chatInput.value;
      chatMessages.appendChild(message);
      chatInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
}
