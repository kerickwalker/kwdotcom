clicks = 0;

function navbarClick() {
        glowContainer = document.getElementById('glow-container');
        about = document.getElementById('about');
        projects = document.getElementById('projects');
        links = document.getElementById('links');

        if(clicks%2 == 0){
            glowContainer.style.animation = 'glowSpread .65s forwards';
            about.style.animation = 'displayTabs .65s forwards';
            projects.style.animation = 'displayTabs .65s forwards';
            links.style.animation = 'displayTabs .65s forwards';
            clicks = clicks + 1;
        }
        else{
            glowContainer.style.animation = 'glowShrink .65s forwards';
            about.style.animation = 'hideTabs .65s forwards';
            projects.style.animation = 'hideTabs .65s forwards';
            links.style.animation = 'hideTabs .65s forwards';
            clicks = clicks +1;
        }
}