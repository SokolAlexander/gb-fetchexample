import React, { useCallback } from "react";
import { useSelector } from 'react-redux';

import Article from "../Article/Article";

export default function ArticlesList() {
  const articles = useSelector(state => state.articles.articles);

  const renderArticle = useCallback(
    (article) => (
      <Article title={article.title} text={article.text} image={article.img} key={article.id} />
    ),
    []
  );

  return <div>{articles.map(renderArticle)}</div>;
}
