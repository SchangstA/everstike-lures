const sendButton = document.getElementById("send-btn")
const chatBubble = document.querySelector(".chat-bubble")

sendButton.addEventListener('click', () => {
  chatBubble.classList.remove('chat-bubble');
  setTimeout(() => {
    chatBubble.classList.add('chat-bubble');
  }, 2000)
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});