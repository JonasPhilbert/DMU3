function listItemAction(e) {
    document.getElementById("input").value = e.target.getAttribute("data-phone");
    fetch("/" + e.target.getAttribute("data-id"))
        .then(res => res.json())
        .then(data => (document.getElementById("address").value = data.address))
        .catch(err => (document.getElementById("address").value = `<FEJL: ${err}>`));
}

window.addEventListener("load", () => {
    document.querySelectorAll("li").forEach(e => e.addEventListener("click", listItemAction));
});
