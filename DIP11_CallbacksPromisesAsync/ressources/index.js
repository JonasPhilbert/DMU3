const usersUrl = 'https://jsonplaceholder.typicode.com/users';

function logData(url) {
    fetch(url)
        .then(response => response.json())
        .then(array => console.log(array));
}

async function logDataAsync(url) {
    const response = await fetch(url);
    const array = await response.json();
    console.log(array);
}

logData(usersUrl);
logDataAsync(usersUrl);
