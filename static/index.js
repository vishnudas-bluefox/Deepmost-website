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


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var mailtoLink = 'mailto:aswanthmanoj51@gmail.com'
        + '?subject=' + encodeURIComponent('Contact from ' + name)
        + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    
    window.location.href = mailtoLink;
});