
function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  chatbot.classList.toggle('hidden');
}
function appendMessage(type, text) {
  const messages = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = type === 'user' ? 'user-message' : 'bot-message';
  msg.innerHTML = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;
  appendMessage('user', text);
  input.value = '';
  setTimeout(() => appendMessage('bot', 'Je traite votre message : ' + text), 500);
}
