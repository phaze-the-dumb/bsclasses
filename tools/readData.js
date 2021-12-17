const data = require('./data/NoteController.json');

let primitives = {
    "System::Void": "void",
    "System::Boolean": "bool",
    "System::Single": "float"
}

let computerNameSpace = ( name ) => {
    return primitives[name] || name;
}

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

// console.log(valueText)
// console.log(dynText)
// console.log(functionsText)

// DON'T RUN THIS FILE (it is test code)