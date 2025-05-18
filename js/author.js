let allAuthors = [];

fetch('./authors.json')
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

// 검색 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allAuthors.filter(author =>
      author.name.toLowerCase().includes(query)
    );
    renderAuthors(filtered);
  });
});

