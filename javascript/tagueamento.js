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

    // Inicializando o Google Analytics
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
    linkGitHub.addEventListener('click', function () {
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

    // Click no link "Home"
    const linkEmail = document.querySelector('[data-link-home]');
    linkEmail.addEventListener('click', function () {
        // console.log(linkEmail.firstElementChild.attributes['alt'].value);
        enviaEvento('header', 'home', 'home');
    });
    
    // Click no link "Sobre"
    const linkEmail = document.querySelector('[data-link-sobre]');
    linkEmail.addEventListener('click', function () {
        // console.log(linkEmail.firstElementChild.attributes['alt'].value);
        enviaEvento('contato', 'sobre', 'link_externo');
    });
    
    // Click no link "Portfolio"
    const linkEmail = document.querySelector('[data-link-portfolio]');
    linkEmail.addEventListener('click', function () {
        // console.log(linkEmail.firstElementChild.attributes['alt'].value);
        enviaEvento('contato', 'portfolio', 'link_externo');
    });
    
    // Click no link "Cursos Realizados"
    const linkEmail = document.querySelector('[data-link-cursos-realizados]');
    linkEmail.addEventListener('click', function () {
        // console.log(linkEmail.firstElementChild.attributes['alt'].value);
        enviaEvento('contato', 'cursos_realizados', 'cursos_realizados');
    });
})();
