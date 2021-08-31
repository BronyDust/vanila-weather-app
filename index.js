const apiKey = localStorage.getItem('api_key');

if (!apiKey) {
  const newKey = prompt('Enter API key');
  if (!newKey) throw new Error('Empty');
  if (newKey.length !== 31) throw new Error('Too short');

  localStorage.setItem('api_key', newKey);
}

console.log('DONE');
