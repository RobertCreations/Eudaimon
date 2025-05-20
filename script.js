async function getAIResponse(message) {
  const res = await fetch('https://eudaimon-dellatorre2002.replit.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  return data.reply;
}
