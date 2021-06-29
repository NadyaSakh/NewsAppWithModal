import { NewsState } from "../reducers/news";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { ModalState } from "../reducers/modal";

export type RootState = {
  news: NewsState;
  modal: ModalState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<any>
  >