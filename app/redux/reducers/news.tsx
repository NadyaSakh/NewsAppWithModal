import { NewsActionType } from '../actions/news';
import { NewsItem, NewsItemWithId } from '../../news/types';
import { SET_NEWS } from "../actionTypes/news";

export type NewsState = {
  newsList: NewsItem[];
  newsIdxList: string[];
  newsWithIdList: NewsItemWithId[];
};

const initialState: NewsState = {
  newsList: [],
  newsIdxList: [],
  newsWithIdList: []
};

export default (state = initialState, action: NewsActionType): NewsState => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        newsList: action.newsList,
        newsIdxList: action.newsList.map((innerItem, index) =>  `${innerItem.publishedAt}${index}`),
        newsWithIdList: action.newsList.map((innerItem, index) => {
          return {
            ...innerItem,
            id: `${innerItem.publishedAt}${index}`
          }
        })
      };

    default:
      return state;
  }
};
