let usersUrl = 'https://jsonplaceholder.typicode.com/users';

onload = () => fetch(usersUrl)
    .then(resultat => {
        if (resultat.status >= 400)
            throw new Error(resultat.status);
        else
            return resultat.json();
    })
    .then(users => addUserTable(users))
    .catch(fejl => console.log('Fejl: ' + fejl));

function addUserTable(users) {
    let html = '<table>';
    for (user of users) {
        html += ' <tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    document.body.innerHTML = html;
}