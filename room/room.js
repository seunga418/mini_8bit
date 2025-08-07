document.addEventListener('DOMContentLoaded', () => {
    const pageLinks = document.querySelectorAll('.page-link');
  
    pageLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const text = link.textContent.trim();
        if (text === '◀' || text === '▶') return;
  
        pageLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  });  