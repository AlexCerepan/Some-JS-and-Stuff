
// starting the server
const http = require('http');
//server.listen(3000,'127.0.0.1');

const fs = require('fs');
// creating a stream of text 
const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
const writeStream = fs.createWriteStream(__dirname + '/write-me.txt', 'utf-8');

readStream.on('data', (chunk) => {
    console.log('new data recived \n\n\n');
    console.log(chunk);
    writeStream.write(chunk);
});
