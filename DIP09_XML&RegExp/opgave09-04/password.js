let primary, repeat;

function checkPrimary() {
    primary.style.backgroundColor = primary.value.match(/^(?=.*[^\d\s\w])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/) ? "lightgreen" : "pink";
    checkRepeat();
}

function checkRepeat() {
    repeat.style.backgroundColor = repeat.value === document.querySelector("#pwPrimary").value ? "lightgreen" : "pink";
}

window.addEventListener("load", function() {
    primary = document.querySelector("#pwPrimary")
    primary.addEventListener("input", checkPrimary);

    repeat = document.querySelector("#pwRepeat")
    repeat.addEventListener("input", checkRepeat);
});