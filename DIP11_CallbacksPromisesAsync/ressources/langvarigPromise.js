function langvarig() {
    return new Promise(function (resolve, reject) {
        let type = Math.trunc(Math.random()*3);
        if (type === 0) throw new Error('Slet ikke OK!');
        setTimeout(afslut, 500);
        function afslut() {
            if (type === 1) resolve('OK!');
            else if (type === 2) reject('Ikke OK!');
        }
    });
}

langvarig()
    .then(resultat => console.log('Resultat: ' + resultat))
    .catch(fejl => console.log('Fejl: ' + fejl));

console.log('Efter kald af langvarig()');
