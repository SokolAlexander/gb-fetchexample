import axios from 'axios';
import * as types from "./actionsTypes";
import { apiUrl } from "../constants";


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

export const getArticles = () => async (dispatch, getState) => {
  try {
    dispatch(getArticlesRequest());
    const res = await axios.get(apiUrl);
    console.log(res);
  
    dispatch(getArticlesSuccess(res.data));
  } catch (err) {
    dispatch(getArticlesFailure(err));
  }

    // fetch(apiUrl).then(res => res.json())
    // .then(articles => dispatch(getArticlesSuccess(articles)))
    // .catch(err => dispatch(getArticlesFailure(err)));
};

