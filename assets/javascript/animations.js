clicks = 0;

function navbarClick() {
        glowContainer = document.getElementById('glow-container');
        home = document.getElementById('home-tab');
        about = document.getElementById('about-tab');
        projects = document.getElementById('projects-tab');
        links = document.getElementById('links-tab');

        if(clicks%2 == 0){
            glowContainer.style.animation = 'glowSpread .65s forwards';
            home.style.animation = 'displayTabs .65s forwards'
            about.style.animation = 'displayTabs .65s forwards';
            projects.style.animation = 'displayTabs .65s forwards';
            links.style.animation = 'displayTabs .65s forwards';
            clicks = clicks + 1;
        }
        else{
            glowContainer.style.animation = 'glowShrink .65s forwards';
            home.style.animation = 'hideTabs .65s forwards'
            about.style.animation = 'hideTabs .65s forwards';
            projects.style.animation = 'hideTabs .65s forwards';
            links.style.animation = 'hideTabs .65s forwards';
            clicks = clicks +1;
        }
}