clicks = 0;

function navbarClick() {
        glowContainer = document.getElementById('glow-container');
        about = document.getElementById('about');
        projects = document.getElementById('projects');
        links = document.getElementById('links');

        if(clicks%2 == 0){
            glowContainer.style.animation = 'glowSpread 3s forwards';
            about.style.animation = 'displayRects 1.0s 0.5s forwards';
            projects.style.animation = 'displayRects 1.0s 1.0s forwards';
            links.style.animation = 'displayRects 1.0s 2.5s forwards';
            clicks = clicks + 1;
        }
        else{
            glowContainer.style.animation = 'glowShrink 3s forwards';
            links.style.animation = 'hideRects 0.7s forwards';
            projects.style.animation = 'hideRects 1.5s forwards';
            about.style.animation = 'hideRects 3.0s forwards';
            clicks = clicks +1;
        }
}