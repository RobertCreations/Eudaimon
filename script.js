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
