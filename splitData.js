const version = '1.20.1'

const parsed = require('./parsed.json');
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
        let isDot = false;
        if((name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name).startsWith('.')){
            isDot = true;
        }
        if(name.This.QualifiedCppName.includes('GlobalNamespace::')){
            fs.writeFileSync('data/'+version+'/' + name.This.Name + '.json', JSON.stringify(name));
            namesList.push(name.This.Name);
        } else{
            if(isDot){
                fs.writeFileSync('data/'+version+'/' + (name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name).replace('.', '') + '.json', JSON.stringify(name));
                namesList.push((name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name).replace('.', ''));
            } else{
                fs.writeFileSync('data/'+version+'/' + (name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name) + '.json', JSON.stringify(name));
                namesList.push((name.This.QualifiedCppName.split('::').join('.') + '.' + name.This.Name).join('.'));
            }
        }

        console.log('Writing: '+i+'/'+names.length);
    } catch(e){
        console.log('FailedWriting: '+i+'/'+names.length);
    }
})

fs.writeFileSync('names/'+version+'.json', JSON.stringify(namesList));

// DON'T RUN THESE IN THIS FOLDER (put them into the folder with index.js then run node splitData.js)