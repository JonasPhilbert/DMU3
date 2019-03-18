let lis = document.querySelectorAll('li');
let id = 1;
for (let li of lis) {
    li.className = id % 2 === 0 ? 'lige' : 'ulige';
    li.id = 'id' + id++;
}
document.querySelector('#id3').innerHTML += ' - #id3';
document.querySelector('.lige').innerHTML += ' - .lige';
