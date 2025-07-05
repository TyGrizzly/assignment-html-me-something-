window.addEventListener('load', async () => {
  const output = document.getElementById('scanner');
  if (!output) return;
  try {
    const resp = await fetch('https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL');
    if (!resp.ok) throw new Error('bad response');
    const data = await resp.json();
    const price = data.quoteResponse && data.quoteResponse.result && data.quoteResponse.result[0]?.regularMarketPrice;
    output.textContent = `AAPL: $${price}`;
  } catch (err) {
    output.textContent = 'Failed to load data';
    console.error('Data fetch error', err);
  }
});
