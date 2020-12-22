import * as types from "./actionsTypes";


export const getArticlesRequest = () => ({
  type: types.GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (articles) => ({
  type: types.GET_ARTICLES_SUCCESS,
  payload: {
    articles,
  },
});

export const getArticlesFailure = (error) => ({
  type: types.GET_ARTICLES_FAILURE,
  payload: {
    error,
  },
});

export const getArticles = () => (dispatch, getState) => {
  // TODO
};
