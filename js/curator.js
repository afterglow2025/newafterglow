let allAuthors = [];

fetch('curator.json')
  .then(res => res.json())
  .then(authors => {
    allAuthors = authors;
    renderAuthors(authors);
  });

function renderAuthors(authors) {
  const grid = document.getElementById('authorGrid');
  grid.innerHTML = authors.map(author => `
    <div class="author-card" data-aos="zoom-in">
      <img src="${author.image}" alt="${author.name}">
      <div class="overlay">
        <h3>${author.name}</h3>
        <p>${author.position}</p>
        ${author.email ? `<p>${author.email}</p>` : ''}
      </div>
    </div>
  `).join('');
}