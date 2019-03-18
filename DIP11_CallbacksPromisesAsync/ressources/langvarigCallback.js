function langvarig(callback) {
    let type = Math.trunc(Math.random()*3);
    if (type === 0) throw new Error('Slet ikke OK!');
    setTimeout(afslut, 500);
    function afslut() {
        if (type === 1) callback(false, 'OK!');
        else if (type === 2) callback('Ikke OK!');
    }
}

try {
    langvarig(slut);
    console.log('Efter kald af langvarig()');
}
catch (e) {
    console.log('Exception: ' + e);
}

function slut(fejl, resultat) {
    if (fejl)
        console.log('Fejl: ' + fejl);
    else
        console.log('Resultat: ' + resultat);
}
