
// ucfirst
function ucfirst(str) {
    if (str.length) {
        return str[0].toUpperCase() + str.substring(1)
    }
    return str
}

// capitalize
function capitalize(str) {
    let chaine = str.split(' ');
    let res = '';
    chaine.forEach(e => {
        res += ucfirst(e) + ' '
    })
    return res
}

// camelCase
function camelCase(str){
    let chaine = str.split(' ');
    let res = '';
    chaine.forEach(e => {
        res += capitalize(e)
    });
    res = res.replace(/\s/g,'');
    return res;
}

// snake_case
function snake_case(str){
    return str.toLowerCase().replace(' ', '_');
}

// prop_access
function prop_access(obj, str){
    if( str.length > 0 && obj !== null ){
        let target = str.split('.');
        let res = obj;
        let path = '';

        for(i = 0; i < target.length; i++){
            if (path.length > 0) {
                path += '.'+target[i]
            }
            else {
                path += target[i]
            }
            
            if (res[target[i]] !== undefined) {
                res = res[target[i]]
            }
            else {
                return path + ' not exist';
            }
        }
        return res;
    }
}

// leet
function leet(str) {
    let vo = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        u: '_',
        y: 7
    }

    let res = str;

    if (res.length > 0) {
        res.split('').forEach(val => {
            if (val.toLowerCase() in vo) {
                res = res.replace(val, vo[val.toLowerCase()]);
            }
        })
    }

    return res
}

// yoda
function yoda(str) {
    return str.split(' ').reverse().join(' ');
}

// reverse
function verlan(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ') 
}