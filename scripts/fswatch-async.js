const { watch } = require('node:fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const watcher = watch("./data/text.txt", { signal });
    for await (const event of watcher)
      console.log(event.filename);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})(); 