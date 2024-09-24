function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const goToAbout = document.getElementById('go-to-about');
    const goToLexeek = document.getElementById('go-to-lexeek');
    const goToContact = document.getElementById('go-to-contact');

    if (goToLexeek) {
        goToLexeek.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('lexeek');
        });
    }

    if (goToAbout) {
        goToAbout.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('about-us');
        });
    }

    if (goToContact) {
        goToContact.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('contact');
        });
    }
});
