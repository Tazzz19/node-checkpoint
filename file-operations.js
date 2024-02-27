const fs = require('fs');

// Read data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Data read from welcome.txt:', data);
});