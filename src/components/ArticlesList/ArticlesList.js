import React, { useCallback, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";

import Article from "../Article/Article";
import { getArticles } from "../../store/articles/actions";
import { REQUEST_STATUS } from "../../store/constants";
import Loader from "../Loader/Loader";

export default function ArticlesList() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.request.status);
  const error = useSelector((state) => state.articles.request.error);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

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

  const handleReload = useCallback(() => {
    dispatch(getArticles());
  }, [dispatch]);

  if (status === REQUEST_STATUS.LOADING) {
    return <Loader />
  }

  if (error) {
    return (
      <>
        <span>ERROR</span>
        <button onClick={handleReload}>Reload</button>
      </>
    )
  }

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
