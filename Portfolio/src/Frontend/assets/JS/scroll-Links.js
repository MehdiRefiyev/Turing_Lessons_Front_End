// let aboutArea = document.getElementById('about');
// let experienceArea = document.getElementById('experience');
// let projectsArea = document.getElementById('projects');

// let aboutLink = document.getElementById('aboutLink');
// let aboutSpan = document.querySelector('#aboutLink span');

// let experienceLink = document.getElementById('experienceLink');
// let experienceSpan = document.querySelector('#experienceLink span');

// let projectsLink = document.getElementById('projectsLink');
// let projectsSpan = document.querySelector('#projectsLink span');

// //
// // let aboutPosition = aboutArea.getBoundingClientRect();
// // const aboutTopCoordinate = aboutPosition.top + window.scrollY;

// // let experiencePosition = experienceArea.getBoundingClientRect();
// // const experienceTopCoordinate = experiencePosition.top + window.scrollY;

// // let projectsPosition = projectsArea.getBoundingClientRect();
// // const projectsTopCoordinate = projectsPosition.top + window.scrollY;
// //

// window.onload = function(){

//     console.log(document.querySelector("main"));
    

//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth" // Optional: makes scrolling smooth
//     });

//     aboutLink.classList.remove('diactive-Links');
//     aboutLink.classList.add('active-Links');

//     aboutSpan.classList.remove('diactive-span');
//     aboutSpan.classList.add('active-span');
// }

// window.addEventListener('scroll', function () {

//     if (this.scrollY <= aboutArea.offsetTop) {

//         aboutLink.classList.remove('diactive-Links');
//         aboutLink.classList.add('active-Links');

//         aboutSpan.classList.remove('diactive-span');
//         aboutSpan.classList.add('active-span');

//         experienceLink.classList.remove('active-Links');
//         experienceLink.classList.add('diactive-Links');

//         experienceSpan.classList.remove('active-span');
//         experienceSpan.classList.add('diactive-span');

//         projectsLink.classList.remove('active-Links');
//         projectsLink.classList.add('diactive-Links');

//         projectsSpan.classList.remove('active-span');
//         projectsSpan.classList.add('diactive-span');
        

//     }
//     else if (this.scrollY <= experienceArea.offsetTop) {

//         aboutLink.classList.remove('active-Links');
//         aboutLink.classList.add('diactive-Links');

//         aboutSpan.classList.remove('active-span');
//         aboutSpan.classList.add('diactive-span');

//         experienceLink.classList.remove('diactive-Links');
//         experienceLink.classList.add('active-Links');

//         experienceSpan.classList.remove('diactive-span');
//         experienceSpan.classList.add('active-span');

//         projectsLink.classList.remove('active-Links');
//         projectsLink.classList.add('diactive-Links');

//         projectsSpan.classList.remove('active-span');
//         projectsSpan.classList.add('diactive-span');
//     }
//     else if (this.scrollY <= projectsArea.offsetTop) {

//         aboutLink.classList.remove('active-Links');
//         aboutLink.classList.add('diactive-Links');

//         aboutSpan.classList.remove('active-span');
//         aboutSpan.classList.add('diactive-span');

//         experienceLink.classList.remove('active-Links');
//         experienceLink.classList.add('diactive-Links');

//         experienceSpan.classList.remove('active-span');
//         experienceSpan.classList.add('diactive-span');

//         projectsLink.classList.remove('diactive-Links');
//         projectsLink.classList.add('active-Links');

//         projectsSpan.classList.remove('diactive-span');
//         projectsSpan.classList.add('active-span');
//     }
//     else{
//         console.error("Scroll Event Error");
//     }

// });


// // if lerin ici sehvdi basqa deyer goturmek lazimdi 



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
