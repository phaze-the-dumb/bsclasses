let version = '1.17.1';
let darkmode = true;
let nameList = [];

let setVer = (ver) => {
    version = ver;
    document.getElementById('version').innerHTML = 'Game Version: ' + version;

    loadClasses();

    window.history.pushState({}, null, 'https://modtools.phazed.xyz/browser?v='+version);
}

let darkMode = ( on ) => {
    if(on){
        document.body.style.background = 'black'
        document.body.style.color = 'white'
    } else{
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
}

let search = ( filter ) => {
    let text = '';
    let list = nameList.filter(x => x.toLowerCase().includes(filter.toLowerCase()))

    list.forEach(x => {
        text += '<div class="className" onclick="openClass(\''+x+'\')">' + x + '</div>';
    })

    document.getElementById('results').innerHTML = text;
}

let primitives = {
    "System::Void": "void",
    "System::Boolean": "bool",
    "System::Single": "float",
    "System::Int32": "int",
    "System::String": "string"
}

let computerNameSpace = ( name ) => {
    return primitives[name] || name;
}

let getUrlParam = (parameter, defaultValue) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter) || defaultValue;
}

let version1 = getUrlParam('v', version);
let className1 = getUrlParam('c', 'na');

setVer(version1);
if(className1 !== 'na'){
    openClass(className1);
}

loadClasses();
darkMode(true);