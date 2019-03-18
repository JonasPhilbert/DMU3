const srcUsers = 'https://jsonplaceholder.typicode.com/users';
const srcPosts = 'https://jsonplaceholder.typicode.com/posts?userId=';

Promise.all([
    fetch(srcUsers).then(result => result.json()).then(data => data[2].name),
    fetch(srcPosts + "3").then(result => result.json()).then(data => data[1].title),
]).then(result => console.log("RESULT: " + result)).catch(err => console.log("ERROR: " + err));

async function asyncA() {
    try {
        let users = await fetch(srcUsers);
        let usersArr = await users.json();
        console.log(usersArr[2].name);
    } catch (err) {
        console.log("ERROR-A: " + err);
    }
}

async function asyncB() {
    try {
        let posts = await fetch(srcPosts + "3");
        let postsArr = await posts.json();
        console.log(postsArr[1].title);
    } catch (err) {
        console.log("ERROR-B: " + err);
    }
}

asyncA();
asyncB();