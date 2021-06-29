import AsyncStorage from '@react-native-community/async-storage';
import {
  PersistConfig,
  Persistor,
  persistReducer,
  persistStore
} from 'redux-persist';
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from "redux";
import thunk from "redux-thunk";
import { RootState } from "./types";
import news from "./reducers/news";
import modal from "./reducers/modal";

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ['modal']
};

interface IStore {
  store: Store<RootState, AnyAction>;
  persistor: Persistor;
}


const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    news,
    modal
  })
);

const middlewares = [thunk];

const configureStore = (): IStore => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
