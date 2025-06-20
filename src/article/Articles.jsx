import React, { useState } from "react";
import articles from "../articles_data";
import { Link } from "react-router-dom";
import "../css/articles.css";

function Articles() {
  const articlesPerPage = 5;

  // fetch all the year
  const years = [...new Set(articles.map(article => article.date.split(" ")[2]))];
  const [selectedYear, setSelectedYear] = useState("All");

  // filterd articles
  const filteredArticles = selectedYear === "All"
  ? articles.filter(article => article.published)
  : articles.filter(article => article.published && article.date.endsWith(selectedYear));

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // selected year , and then go back to first page
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="articles-page">
      <h1>Articles</h1>
      <p className="subtitle">Articles that share my thoughts.</p>

      {/* year select */}
      <div className="year-filter">
        <label htmlFor="yearSelect">Filter by Year:</label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          <option value="All">All</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* article list */}
      <div className="article-list">
        {currentArticles.map((article) => (
          <div key={article.slug} className="article-row">
            <div className="article-info">
              <Link to={`/articles/${article.slug}`} className="title-link">
                <h2>{article.title} <span className="arrow">›</span></h2>
              </Link>
              <p className="excerpt">{article.excerpt}</p>
              <div className="meta">
                <span>{article.readTime}</span>
                <span className="meta-date">{article.date}</span>
              </div>
              <div className="tags">
                {article.tags?.map((tag, i) => (
                  <span key={i} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
            <div className="cover">
              <img src={article.coverImg} alt={article.title} />
            </div>
          </div>
        ))}
      </div>

      {/* btn of previous page or next page*/}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ◀ Prev
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next ▶
        </button>
      </div>
    </section>
  );
}

export default Articles;
