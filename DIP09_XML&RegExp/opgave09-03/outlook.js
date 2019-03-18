function addRecord(name, email) {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerText = name;
    tr.append(tdName);

    let tdEmail = document.createElement("td");
    tdEmail.innerText = email;
    tr.append(tdEmail);

    document.querySelector("#tblPeople").append(tr);
}

window.addEventListener("load", e => {
    const outlook = "Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";

    const regex = /([^\s]+ [^\s]+)( \(\w+\) )<([^>]+)>/g;
    let arr;
    while ((arr = regex.exec(outlook)) !== null) {
        addRecord(arr[1], arr[3]);
        console.log(arr[2]);
    }
});

