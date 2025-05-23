async function getAIResponse(message) {
  const res = await fetch('https://70786f4a-783b-490b-a17d-1ed34377a429-00-1zz89m0m1y8he.riker.replit.dev/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  return data.reply;
}

function addMessageToChatbox(message, sender) {
  const chatbox = document.getElementById('chatbox');
  const msgDiv = document.createElement('div');
  msgDiv.textContent = message;
  msgDiv.className = sender;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById('chat-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = document.getElementById('messageInput');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessageToChatbox(userMessage, 'user');
  input.value = '';

  addMessageToChatbox('Typing...', 'bot');

  try {
    const botReply = await getAIResponse(userMessage);
    const chatbox = document.getElementById('chatbox');
    chatbox.lastChild.remove();
    addMessageToChatbox(botReply, 'bot');
  } catch (error) {
    const chatbox = document.getElementById('chatbox');
    chatbox.lastChild.remove();
    addMessageToChatbox("Oops! Something went wrong. Try again.", 'bot');
    console.error('Error getting AI response:', error);
  }
});
