import { REQUEST_STATUS } from '../constants';

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
    default: return state;
  }
}