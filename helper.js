const helloTag = function (){
    console.log("Hello world");
};

let me = function (name) {
 return ' ${name} ';
};

let email = function (email) {
    return email;
};


module.exports = {
    helloTag,
    me,
    email
};

const fs = require('fs');

// fs.readFile('read-me.txt', 'utf-8', function(err, data) {
//     fs.writeFile('write-me.txt', data, function(err, data) {
//         if (err) console.log(err);
//     });
// });

// fs.unlink('write-me.txt', (err) => {
//     console.log(err);
// });

  
fs.mkdir('my-folder', () => {
    fs.readFile('read-me.txt', 'utf8', (err,data) => {
            fs.writeFile('./my-folder/write-me.txt',  data , 'utf8', () => {
        })
    });
});

