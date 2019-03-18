window.addEventListener("load", event => {
    let input = document.querySelector("#dateInput");
    input.addEventListener("input", event => {
        let exp = /^\d{4}-(0[1-9]|1[0-2])-(3[01]|[12][0-9]|0[1-9])$/;
        if (exp.test(input.value)) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "pink";
        }
    })
})