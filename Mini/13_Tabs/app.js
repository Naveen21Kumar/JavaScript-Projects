const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Tab buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');

      // Tab Content
      articles.forEach(function (article) {
        article.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    });
  }
});
