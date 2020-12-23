import { REQUEST_STATUS } from '../constants';
import * as types from './actionsTypes';

const initialState = {
  articles: [
    {
      id: 1,
      title: "Test Article",
      text: "Test Text",
      img: "",
    },
  ],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ARTICLES_SUCCESS: {
      return {
        articles: action.payload.articles,
        request: {
          status: REQUEST_STATUS.SUCCESS,
          error: null,
        }
      };
    }
    case types.GET_ARTICLES_FAILURE: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.FAILURE,
          error: action.payload.error,
        },
      };
    }
    case types.GET_ARTICLES_REQUEST: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.LOADING,
          error: null,
        }
      };
    }
    default:
      return state;
  }
}