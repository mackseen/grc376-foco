function showPage(pageId) {
    var sections = document.querySelectorAll('main section');

    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}
  
  document.addEventListener('DOMContentLoaded', function() {
    showPage('Home');
  });