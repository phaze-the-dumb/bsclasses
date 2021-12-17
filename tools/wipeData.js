const fs = require('fs');

let dir = fs.readdirSync('data')

dir.forEach(file => {
    fs.unlinkSync('data/'+file);
})

// DON'T RUN THESE IN THIS FOLDER (put them into the folder with index.js then run node wipeData.js)