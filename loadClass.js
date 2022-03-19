let openClass = ( name ) => {
    let path = '/data/'+version+'/'+name+'.json';

    fetch(path).then(data => data.json()).then(data => {
        window.history.pushState({}, null, '/browser?v='+version+'&c='+name);
        let functions = data.Methods
        let dynThingy = data.InstanceFields
        let values = data.Properties

        let functionsText = ''
        let dynText = ''
        let valueText = ''

        functions.forEach(func => {
            let nameSpace = func.ReturnType.Namespace
            if(nameSpace === '')nameSpace = 'GlobalNamespace'

            let args = ''

            func.Parameters.forEach(param => {
                let nameSpace = param.Type.Namespace
                if(nameSpace === '')nameSpace = 'GlobalNamespace'

                args += computerNameSpace(nameSpace + '::' + param.Type.Name) + ' ' + param.Name+', '
            })

            functionsText += computerNameSpace(nameSpace + '::' + func.ReturnType.Name)+' '+func.Name+'('+args+')\n'
        })

        dynThingy.forEach(dyn => {
            let nameSpace = dyn.Type.Namespace
            if(nameSpace === '')nameSpace = 'GlobalNamespace'

            dynText += computerNameSpace(nameSpace + '::' + dyn.Type.Name) + ' dyn_'+dyn.Name+'()\n'
        })

        values.forEach(value => {
            let nameSpace = value.Type.Namespace
            if(nameSpace === '')nameSpace = 'GlobalNamespace'

            valueText += computerNameSpace(nameSpace + '::' + value.Type.Name) + ' ' + value.Name+'\n'
        })

        valueText = valueText.split('\n')
        valueText.forEach((name, i) => {
            name = name.split('<').join('&#60;');
            name = name.split('>').join('&#62;');
            name = colourCode(name);

            valueText[i] = '<div class="className">'+name+'</div>'
        })

        functionsText = functionsText.split('\n')
        functionsText.forEach((name, i) => {
            name = name.split('<').join('&#60;');
            name = name.split('>').join('&#62;');
            name = colourCode(name);

            functionsText[i] = '<div class="className">'+name+'</div>'
        })

        dynText = dynText.split('\n')
        dynText.forEach((name, i) => {
            name = name.split('<').join('&#60;');
            name = name.split('>').join('&#62;');
            name = colourCode(name);

            dynText[i] = '<div class="className">'+name+'</div>'
        })

        let text = '<h1>'+name+'</h1><br><p>Values</p>'+valueText.join('')+'<br><p>Functions / Hooks</p>'+functionsText.join('')+'<br><p>DYN Functions</p>'+dynText.join('')

        document.getElementById('info').innerHTML = text
    })
}

let loadClasses = async () => {
    document.getElementById('loading').innerHTML = 'Loading... (Fetching Lists)';
    let data = await fetch('/names/'+version+'.json');

    document.getElementById('loading').innerHTML = 'Loading... (Parsing Array)';
    data = await data.json();

    document.getElementById('loading').innerHTML = 'Loading... (Generating Names)';

    data.sort();
    nameList = data;

    let text = '';

    text += '<div class="search"><input type="text" id="search" oninput="search(this.value)" placeholder="Search Classes" name="Class Search" autocomplete="off"></div><div id="results">'


    data.forEach(item => {
        if(item[0] === '.')item = item.replace('.', '')
        text += '<div class="className" onclick="openClass(\''+item+'\')">' + item + '</div>';
    })

    text += '</div>'

    document.getElementById('classes').innerHTML = text;
    document.getElementById('loading').innerHTML = '';
}