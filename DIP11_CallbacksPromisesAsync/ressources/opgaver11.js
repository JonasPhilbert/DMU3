let usersUrl0 = 'https://jsonplaceholder.typicode.com/users';
let usersUrl1 = 'https://jsonplaceholder.typicode.com/usersX';
let usersUrl2 = 'httpsX://jsonplaceholder.typicode.com/users';

let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
// let postsUrl = 'https://jsonplaceholder.typicode.com/postsX?userId=';
// let postsUrl = 'httpsX://jsonplaceholder.typicode.com/posts?userId=';

async function fetchJSON(url) {
    try {
        let json = await fetch(url);
        let data = await json.json();
        console.log(data[1].name);
    } catch (e) {
        console.log("Err: " + e);
    }
}

fetchJSON(usersUrl0);
fetchJSON(usersUrl1);
fetchJSON(usersUrl2);