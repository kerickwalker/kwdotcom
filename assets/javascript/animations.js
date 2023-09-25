function navbarClick() {
    console.log('clicked');
    glowContainer = document.getElementById('glow-container');
    glowContainer.classList.add('glow-spread');
    console.log(glowContainer.classList);
    about = document.getElementById('about');
    about.classList.add('display-about');
    projects = document.getElementById('projects');
    projects.classList.add('display-projects');
    links = document.getElementById('links');
    links.classList.add('display-links');
}