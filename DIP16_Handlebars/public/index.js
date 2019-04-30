fetch("/list.hbs")
    .then(template => template.text())
    .then(templateText => {
        fetch("/files")
            .then(response => response.json())
            .then(files => {
                document.body.innerHTML += Handlebars.compile(templateText)({
                    files
                });
            });
    });
