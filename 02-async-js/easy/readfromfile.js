
function readFilet()
{
    const fs = require('fs');
    fs.readFile('path/to/your/file.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('An error occurred:', err);
        } else {
            console.log('File contents:', data);
        }
    });
}
