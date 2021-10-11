// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-0C1NQV2WQJ"></script>
// <script>
//       window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());

//   gtag('config', 'G-0C1NQV2WQJ');
// </script>
(() => {
    // Implementando a função que carrega o pixel do Google Analytics
    function carregaGTag() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-0C1NQV2WQJ';

        var tagScript = document.getElementsByTagName('script')[0];
        tagScript.parentNode.insertBefore(ga, tagScript);
    };
    // Carregando o pixel do Google Analytics
    carregaGTag();

    // Inicializando a o Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    };

    gtag('js', new Date());
    gtag('config', 'G-0C1NQV2WQJ');

    // Implementando a função que envia um evento ao Google Analytics
    function enviaEvento(categoria, acao, rotulo) {
        gtag('event', acao, {
            'event_category': categoria,
            'event_label': rotulo
        });
    };

    // Click no link do GitHub
    const linkGitHub = document.querySelector('[data-link-github]');
    linkGitHub.addEventListener('click', function (event) {
        event.preventDefault();
        // console.log(linkGitHub.firstElementChild.attributes['alt'].value);
        enviaEvento('contato', 'github', 'link_externo');
    });

    // Click no link do LinkedIn
    const linkLinkedIn = document.querySelector('[data-link-linkedin]');
    linkLinkedIn.addEventListener('click', function () {
        // console.log(linkLinkedIn.firstElementChild.attributes['alt'].value);
        enviaEvento('contato', 'linkedin', 'link_externo');
    });

    // Click no link do email
    const linkEmail = document.querySelector('[data-link-email]');
    linkEmail.addEventListener('click', function () {
        // console.log(linkEmail.firstElementChild.attributes['alt'].value);
        enviaEvento('contato', 'email', 'link_externo');
    });
})();