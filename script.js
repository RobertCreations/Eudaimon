const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Dummy AI responder (replace with real API call)
function getAIResponse(message) {
    // You can expand this logic or connect to a real AI API
    return new Promise(resolve => {
        setTimeout(() => {
            // Default generic AI reply
            resolve("I'm here to help! Tell me more about your problem or how I can assist.");
        }, 900);
    });
}

chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'user-message';
    userMsgDiv.textContent = message;
    chatBox.appendChild(userMsgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    userInput.value = '';
    userInput.focus();

    // Get AI response
    const aiReply = await getAIResponse(message);
    const aiMsgDiv = document.createElement('div');
    aiMsgDiv.className = 'ai-message';
    aiMsgDiv.textContent = aiReply;
    chatBox.appendChild(aiMsgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
});