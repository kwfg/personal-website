import React from "react";
import articles from "../articles_data";
import { Link } from "react-router-dom";
import "../css/articles.css";
import ViewMore from "../components/ViewMore";

function LatestArticles() {
  return (
    <section className="latest-articles">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
      {articles
        .filter(article => article.published)
        .slice(0, 2)
        .map((article) => (
        <div key={article.slug} className="article-card">
          <Link to={`/articles/${article.slug}`} className="article-title">
            {article.title} ›
          </Link>
          <p>{article.excerpt}</p>
          <div className="article-meta">
            <span>{article.readTime}</span>
            <span>{article.date}</span>
          </div>
        </div>
      ))}
    </div>
      <ViewMore to="/articles" text="Read more articles" />
    </section>
  );
}

export default LatestArticles;
