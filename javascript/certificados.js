(() => {
    function adiciona_icone(titulo_curso, link_certificado, link_icone) {
        var div_icones = document.getElementById('icones_cursos')
        novo_icone = ""
        novo_icone += `<span data-tooltip="${titulo_curso}">`
        novo_icone += `<a href="${link_certificado}">`
        novo_icone += `<img src="${link_icone}" alt="${titulo_curso}"></a>`
        novo_icone += "</span>"
        div_icones.innerHTML = div_icones.innerHTML + novo_icone
    }

    async function getData() {
        const response = await fetch("../javascript/data_certificates_final.csv");
        const data = await response.text();

        var allRows = data.split(/\r?\n|\r/).slice(1);
        allRows.length = allRows.length - 1;

        allRows.forEach(elem => {
            if (elem == null) {
                return
            }
            const row = elem.split(';');
            adiciona_icone(titulo_curso = row[0],
                link_certificado = row[7],
                link_icone = row[4]);
        });
    }

    getData();
})();