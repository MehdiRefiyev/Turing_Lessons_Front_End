let aboutArea = document.getElementById('about');
let experienceArea = document.getElementById('experience');
let projectsArea = document.getElementById('projects');

let aboutLink = document.getElementById('aboutLink');
let aboutSpan = document.querySelector('#aboutLink span');

let experienceLink = document.getElementById('experienceLink');
let experienceSpan = document.querySelector('#experienceLink span');

let projectsLink = document.getElementById('projectsLink');
let projectsSpan = document.querySelector('#projectsLink span');

let aboutTopCoordinate, experienceTopCoordinate, projectsTopCoordinate;

// Calculate the top coordinates once the page loads
window.onload = function() {
    aboutTopCoordinate = aboutArea.getBoundingClientRect().top + window.scrollY;
    experienceTopCoordinate = experienceArea.getBoundingClientRect().top + window.scrollY;
    projectsTopCoordinate = projectsArea.getBoundingClientRect().top + window.scrollY;

    // Ensure page scrolls to the top on load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Set initial active link
    setActiveLink("about");
};

// Helper function to update active classes
function setActiveLink(section) {
    const linkMap = {
        about: { link: aboutLink, span: aboutSpan },
        experience: { link: experienceLink, span: experienceSpan },
        projects: { link: projectsLink, span: projectsSpan },
    };

    // Reset all links
    Object.keys(linkMap).forEach((key) => {
        linkMap[key].link.classList.remove('active-Links');
        linkMap[key].link.classList.add('diactive-Links');
        linkMap[key].span.classList.remove('active-span');
        linkMap[key].span.classList.add('diactive-span');
    });

    // Activate the selected link
    linkMap[section].link.classList.add('active-Links');
    linkMap[section].link.classList.remove('diactive-Links');
    linkMap[section].span.classList.add('active-span');
    linkMap[section].span.classList.remove('diactive-span');
}

// Update active link based on scroll position
window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY < experienceTopCoordinate - 1) {
        setActiveLink("about");
    } else if (currentScrollY < projectsTopCoordinate - 1) {
        setActiveLink("experience");
    } else {
        setActiveLink("projects");
    }
});
