// -------Module----------
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // ------FS file system----------
    // Update Folder
    function updateDir() {
        try {
            fs.renameSync('foldercreate', 'update'); // Corrected method
            res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set proper status code and headers
            res.end('Success: Folder updated');
        } catch (e) {
            console.error(e);
            res.writeHead(500, { 'Content-Type': 'text/plain' }); // Handle errors properly
            res.end('Error: Failed to update folder');
        }
    }

    updateDir();
});

server.listen(8080, function () {
    console.log('Listening on port 8080');
});
