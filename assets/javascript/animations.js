clicks = 0;

function navbarClick() {
        glowContainer = document.getElementById('glow-container');
        about = document.getElementById('about');
        projects = document.getElementById('projects');
        links = document.getElementById('links');

        if(clicks%2 == 0){
            glowContainer.style.animation = 'glowSpread 1s forwards';
            about.style.animation = 'displayTabs 1s forwards';
            projects.style.animation = 'displayTabs 1s forwards';
            links.style.animation = 'displayTabs 1s forwards';
            clicks = clicks + 1;
        }
        else{
            glowContainer.style.animation = 'glowShrink 1s forwards';
            about.style.animation = 'hideTabs 1s forwards';
            projects.style.animation = 'hideTabs 1s forwards';
            links.style.animation = 'hideTabs 1s forwards';
            clicks = clicks +1;
        }
}