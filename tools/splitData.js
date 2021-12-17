const version = '1.19.0'

const parsed = require('./parsedjson/'+version+'.json');
const fs = require('fs');
let names = [];

console.log('Parsing JSON');

parsed.Types.forEach((type, i) => {
    if(!type.This.Name.includes('d__') && !type.This.Name.includes('DisplayClass')){
        names.push(type)

        console.log('Parsing: '+i+'/'+parsed.Types.length + ', ' + type.This.Name);
    }
});

names.sort();
let namesList = [];

names.forEach((name, i) => {
    try{
        if(name.This.QualifiedCppName.includes('GlobalNamespace::')){
            fs.writeFileSync('data/'+version+'/' + name.This.Name + '.json', JSON.stringify(name));
            namesList.push(name.This.Name);
        } else{
            fs.writeFileSync('data/'+version+'/' + name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name + '.json', JSON.stringify(name));
            namesList.push(name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name);
        }

        console.log('Writing: '+i+'/'+names.length);
    } catch(e){
        console.log('FailedWriting: '+i+'/'+names.length);
    }
})

fs.writeFileSync('names/'+version+'.json', JSON.stringify(namesList));

// DON'T RUN THESE IN THIS FOLDER (put them into the folder with index.js then run node splitData.js)