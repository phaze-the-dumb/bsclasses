let colourCode = (name) => {
    name = name.split('int ').join('<span class="TypeName">int </span>');
    name = name.split('void ').join('<span class="TypeName">void </span>');
    name = name.split('float ').join('<span class="TypeName">float </span>');
    name = name.split('double ').join('<span class="TypeName">double </span>');
    name = name.split('char ').join('<span class="TypeName">char </span>');
    name = name.split('bool ').join('<span class="TypeName">bool </span>');
    name = name.split('string ').join('<span class="TypeName">string </span>');

    if(name.includes('Assets')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Assets')){
                let name1 = words[i].split('.');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('BeatSaberAPI')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('BeatSaberAPI')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('DataModels')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('DataModels')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('GlobalNamespace')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('GlobalNamespace::')){
                let name1 = words[i].split('::');
                name1.shift();

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('HMUI')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('HMUI')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Il2CppInspector::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Il2CppInspector::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('JetBrains::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('JetBrains::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('LeaderboardsDTO::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('LeaderboardsDTO::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Libraries::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Libraries::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('LiteNetLib::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('LiteNetLib::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('LIV::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('LIV::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('MasterServer::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('MasterServer::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Menu::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Menu::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Microsoft::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Microsoft::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('ModestTree::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('ModestTree::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Mono::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Mono::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('NetEase::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('NetEase::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('NUnit::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('NUnit::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Oculus::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Oculus::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('OnlineServices::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('OnlineServices::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Org::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Org::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('OVR::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('OVR::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('OVRSimpleJSON::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('OVRSimpleJSON::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Polyglot::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Polyglot::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Priority_Queue::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Priority_Queue::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('RootMotion::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('RootMotion::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('SFB::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('SFB::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('System')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('System')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('TMPro::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('TMPro::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Tweening::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Tweening::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Unity::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Unity::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('UnityEngine')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('UnityEngine')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('UnityEngineInternal::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('UnityEngineInternal::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Valve::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Valve::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('VRUIControls::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('VRUIControls::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    } else if(name.includes('Zenject::')){
        let words = name.split(' ');

        words.forEach((word, i) => {
            if(word.startsWith('Zenject::')){
                let name1 = words[i].split('::');

                words[i] = '<span class="nameSpaceType" onclick="openClass(\''+name1.join('.')+'\')">' + word + '</span>'
            }
        })

        name = words.join(' ');
    }

    return name
}