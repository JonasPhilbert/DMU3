function langvarig(nr) {
    return new Promise(function (resolve, reject) {
        let type = Math.trunc(Math.random()*3);
        // if (type === 0) throw new Error(`#${nr} Slet ikke OK!`);
        if (type === 0) reject(new Error(`#${nr} Slet ikke OK!`));
        setTimeout(afslut, 500);
        function afslut() {
            if (type === 1) resolve(`#${nr} OK!`);
            else if (type === 2) reject(`#${nr} Ikke OK!`);
        }
    });
}

async function main() { // sammenlign med rekursiv [EJ]
    try {
        for await(let resultat of [langvarig(1), langvarig(2)])
            console.log('Resultat: ' + resultat);
    }
    catch (e) {
        console.log('Exception: ' + e);
    }
}
main();
