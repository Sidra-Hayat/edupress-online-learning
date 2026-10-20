
import { useMemo, useState } from 'react';

const articles = [
  {
    id: 1,
    image: '/images/Rectangle 139.png',
    title: 'Best LearnPress WordPress Theme Collection For 2023',
    date: 'Jan 24, 2023',
    description:
      'Looking for an amazing & well-functional LearnPress WordPress Theme? Online education has become a global standard...',
    category: 'Educate',
    tags: ['LMS', 'LearnPress', 'Free courses'],
  },
  {
    id: 2,
    image: '/images/Rectangle 139 (1).png',
    title: 'Best LearnPress WordPress Theme Collection For 2023',
    date: 'Jan 24, 2023',
    description:
      'Looking for an amazing & well-functional LearnPress WordPress Theme? Online education has become a global standard...',
    category: 'Academy',
    tags: ['Marketing', 'Idea', 'LearnPress'],
  },
  {
    id: 3,
    image: '/images/Rectangle 139 (2).png',
    title: 'Best LearnPress WordPress Theme Collection For 2023',
    date: 'Jan 24, 2023',
    description:
      'Looking for an amazing & well-functional LearnPress WordPress Theme? Online education has become a global standard...',
    category: 'Commercial',
    tags: ['Instructor', 'LMS'],
  },
  {
    id: 4,
    image: '/images/Rectangle 139 (4).png',
    title: 'Best LearnPress WordPress Theme Collection For 2023',
    date: 'Jan 24, 2023',
    description:
      'Looking for an amazing & well-functional LearnPress WordPress Theme? Online education has become a global standard...',
    category: 'Office',
    tags: ['Free courses', 'Marketing'],
  },
];

const categories = [
  { name: 'Commercial', count: 15 },
  { name: 'Office', count: 15 },
  { name: 'Shop', count: 15 },
  { name: 'Educate', count: 15 },
  { name: 'Academy', count: 15 },
];

const tags = [
  'Free courses',
  'Marketing',
  'Idea',
  'LMS',
  'LearnPress',
  'Instructor',
];

const ARTICLES_PER_PAGE = 4;

export default function Blog() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [activePage, setActivePage] = useState(1);

  const filteredArticles = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesSearch =
        !searchTerm ||
        article.title.toLowerCase().includes(searchTerm) ||
        article.description.toLowerCase().includes(searchTerm);

      const matchesCategory =
        !selectedCategory || article.category === selectedCategory;

      const matchesTag =
        !selectedTag || article.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [search, selectedCategory, selectedTag]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  );

  const currentPage = Math.min(activePage, totalPages);

  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const resetFilters = () => {
    setSearch('');
    setSelectedCategory('');
    setSelectedTag('');
    setActivePage(1);
  };

  const chooseCategory = (category) => {
    setSelectedCategory((current) =>
      current === category ? '' : category
    );
    setSelectedTag('');
    setActivePage(1);
  };

  const chooseTag = (tag) => {
    setSelectedTag((current) => (current === tag ? '' : tag));
    setSelectedCategory('');
    setActivePage(1);
  };

  const changeSearch = (value) => {
    setSearch(value);
    setActivePage(1);
  };

  const recentArticles = articles.slice(0, 3);

  return (
    <main className="blog-page">
      <div className="breadcrumb">
        <span>Home</span>
        {' / '}
        <span>Blog</span>
      </div>

      <div className="blog-layout">
        <section className="blog-main">
          <header className="blog-header">
            <h1 className="blog-title">All Articles</h1>
          </header>

          <div className="blog-toolbar">
            <input
              className="blog-search"
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(event) => changeSearch(event.target.value)}
              aria-label="Search articles"
            />

            <div className="blog-view-controls">
              <button
                type="button"
                className={`blog-view-button${view === 'grid' ? ' active' : ''}`}
                onClick={() => setView('grid')}
                aria-label="Grid view"
                aria-pressed={view === 'grid'}
              >
                <span aria-hidden="true">▦</span>
              </button>

              <button
                type="button"
                className={`blog-view-button${view === 'list' ? ' active' : ''}`}
                onClick={() => setView('list')}
                aria-label="List view"
                aria-pressed={view === 'list'}
              >
                <span aria-hidden="true">☰</span>
              </button>
            </div>
          </div>

          {(selectedCategory || selectedTag || search) && (
            <div className="blog-toolbar">
              <p className="blog-card-date">
                {filteredArticles.length} article(s) found
                {selectedCategory ? ` in ${selectedCategory}` : ''}
                {selectedTag ? ` tagged ${selectedTag}` : ''}
              </p>

              <button
                type="button"
                className="blog-tag"
                onClick={resetFilters}
              >
                Clear filters ×
              </button>
            </div>
          )}

          {visibleArticles.length > 0 ? (
            <div
              className={`blog-articles${view === 'list' ? ' list-view' : ''}`}
            >
              {visibleArticles.map((article) => (
                <article className="blog-card" key={article.id}>
                  <div className="blog-card-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.visibility = 'hidden';
                      }}
                    />
                  </div>

                  <div className="blog-card-body">
                    <p className="blog-card-date">{article.date}</p>

                    <h2 className="blog-card-title">
                      {article.title}
                    </h2>

                    <p className="blog-card-description">
                      {article.description}
                    </p>

                    <span className="blog-card-category">
                      {article.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>No articles found.</p>
              <p>Try another search or clear your filters.</p>
              <button
                type="button"
                className="blog-tag"
                onClick={resetFilters}
              >
                Show all articles
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <nav className="blog-pagination" aria-label="Blog pagination">
              <button
                type="button"
                className="blog-page-button"
                disabled={currentPage === 1}
                onClick={() => setActivePage(currentPage - 1)}
                aria-label="Previous page"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    className={`blog-page-button${currentPage === page ? ' active' : ''}`}
                    onClick={() => setActivePage(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                type="button"
                className="blog-page-button"
                disabled={currentPage === totalPages}
                onClick={() => setActivePage(currentPage + 1)}
                aria-label="Next page"
              >
                ›
              </button>
            </nav>
          )}
        </section>

        <aside className="blog-sidebar">
          <section className="blog-sidebar-section">
            <h2 className="blog-sidebar-title">Categories</h2>

            <ul className="blog-category-list">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    type="button"
                    className={`blog-category-link${selectedCategory === category.name ? ' active' : ''}`}
                    onClick={() => chooseCategory(category.name)}
                  >
                    <span>{category.name}</span>
                    <span className="blog-category-count">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="blog-sidebar-section">
            <h2 className="blog-sidebar-title">Recent Posts</h2>

            {recentArticles.map((article) => (
              <article className="blog-recent-post" key={article.id}>
                <div className="blog-recent-image">
                  <img src={article.image} alt="" loading="lazy" />
                </div>

                <div>
                  <p className="blog-card-date">{article.date}</p>
                  <h3 className="blog-recent-title">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </section>

          <section className="blog-sidebar-section">
            <h2 className="blog-sidebar-title">Tags</h2>

            <div className="blog-tags">
              {tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className={`blog-tag${selectedTag === tag ? ' active' : ''}`}
                  onClick={() => chooseTag(tag)}
                  aria-pressed={selectedTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
