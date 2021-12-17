const fs = require('fs');

let dir = fs.readdirSync('data')

dir.forEach(file => {
    let dir1 = fs.readdirSync('data/'+file)

    dir1.forEach(file2 => {
        fs.unlinkSync('data/'+file+'/'+file2);
    })
})

// DON'T RUN THESE IN THIS FOLDER (put them into the folder with index.js then run node wipeData.js)