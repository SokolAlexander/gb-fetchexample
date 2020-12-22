import React, { useCallback, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";

import Article from "../Article/Article";

export default function ArticlesList() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);

  useEffect(() => {
    // TODO - dispatch getArticles
  }, []);

  const renderArticle = useCallback(
    (article) => (
      <Article
        title={article.title}
        text={article.text}
        image={article.img}
        key={article.id}
      />
    ),
    []
  );

  return <div>{articles.map(renderArticle)}</div>;
}

// для любителей классов
// class ArticlesList extends React.Component {
//   renderArticle = (article) => (
//     <Article
//       title={article.title}
//       text={article.text}
//       image={article.img}
//       key={article.id}
//     />
//   );

//   render() {
//     return <div>{articles.map(this.renderArticle)}</div>;
//   }
// }

// const mapStateToProps = (state) => ({
//   articles: state.articles.articles
// });

// export default connect(mapStateToProps)(ArticlesList);
