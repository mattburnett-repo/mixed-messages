console.log('Hello from script.js\n');

// set up env/requires/ etc
const fs = require('fs');

// open sourceText.txt file and read contents, each line (delimited by h0A h0A => '\n\n') to an array element
fs.readFile('./sourceText.txt', 'utf-8', function(error, data) {
    // error is null if no error occurred, but an Error object if it did
    if (error) {
     throw error;
    }
    // the file data will be passed into the callback if no error was thrown
    let sentences = data.split('\n\n');
    
    // disply three randomly-selected messages
    for(let i=0; i<3; i++) {
        console.log(sentences[Math.floor(Math.random() * sentences.length)] + '\n');
    }
  });


 
