import { ThunkAction } from 'redux-thunk';
import { RootState } from '../types';
import { Action, Dispatch, AnyAction } from 'redux';
import { NewsItem } from '../../news/types';
import { SET_NEWS } from "../actionTypes/news";

interface ISetNewAction {
  type: typeof SET_NEWS;
  newsList: NewsItem[];
}

const setNewsAction = (newsList: NewsItem[]): ISetNewAction => ({
  type: SET_NEWS,
  newsList
});

export const setNewsList = (
  newsList: NewsItem[]
): ThunkAction<void, RootState, unknown, Action> => (
  dispatch: Dispatch<AnyAction>
) => {
  return dispatch(setNewsAction(newsList));
};

export type NewsActionType = ISetNewAction;
