const { watch } = require('node:fs');
const fs = require('node:fs');


watch('./data', (eventType, filename) => {
  if (filename) {
    fs.readFile(`./sqlite-data/${filename}`, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data)
      return data;  
    });
  }
});