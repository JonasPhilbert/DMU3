const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts"; //?userId=1

fetch(urlUsers).then(result => result.json()).then(result => console.log(result[1])).catch(err => console.log("Err: " + err));

async function getUser() {
    try {
        let json = await fetch(urlPosts);
        let data = await json.json();
        console.log(data[1]);
    } catch (e) {
        console.log("Err: " + e);
    }
}

getUser();