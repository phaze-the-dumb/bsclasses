const parsed = require('./parsed.json');
const fs = require('fs');
let names = [];

parsed.Types.forEach(type => {
    if(!type.This.Name.includes('d__') && !type.This.Name.includes('DisplayClass') && type.This.QualifiedCppName.includes('GlobalNamespace::')){
        names.push(type)
    }
});

names.sort();
let namesList = [];

names.forEach(name => {
    try{
        fs.writeFileSync('data/1.19.0/' + name.This.Name + '.json', JSON.stringify(name));
        namesList.push(name.This.Name);
    } catch(e){}
})

fs.writeFileSync('names/1.19.0.json', JSON.stringify(namesList));

// DON'T RUN THESE IN THIS FOLDER (put them into the folder with index.js then run node splitData.js)