async function getAIResponse(message) {
  const res = await fetch('https://your-replit-name.username.repl.co/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  return data.reply;
}
