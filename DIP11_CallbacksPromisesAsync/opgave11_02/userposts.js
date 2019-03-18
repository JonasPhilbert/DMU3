const srcUsers = "https://jsonplaceholder.typicode.com/users";
const srcPosts = "https://jsonplaceholder.typicode.com/posts?userId=";

fetch(srcUsers)
    .then(result => result.json())
    .then(data => fetch(srcPosts + data[1].id))
    .then(result => result.json())
    .then(data => console.log(data[2].title))
    .catch(err => console.log("ERROR: " + err));

async function doFetch() {
    try {
        let users = await fetch(srcUsers);
        let usersData = await users.json();
        let post = await fetch(srcPosts + usersData[1].id);
        let postData = await post.json();
        console.log(postData[2].title);
    } catch (err) {
        console.log("ERROR: " + err);
    }
}

doFetch();