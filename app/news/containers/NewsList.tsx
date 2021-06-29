import React, { useEffect, useState } from "react";
import NewsListView from "../components/NewsListView";
import { useDispatch, useSelector } from "react-redux";
import { setNewsList } from "../../redux/actions/news";
import { RootState } from "../../redux/types";
import getNews from "../services/getNews";
import Spinner from "../../common/components/Spinner";

const NewsList = (): React.ReactElement => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isNeedLoading, setIsNeedLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limitNews, setLimitNews] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const news = useSelector(({ news }: RootState) => news.newsList);

  const getNewsList = (): void => {
    setIsNeedLoading(true);
    getNews({ page })
      .then(newsResult => {
        const { count: limit, newsList } = newsResult;
        setLoading(false);
        setLimitNews(limit);
        setIsNeedLoading(false);
        setRefreshing(false);
        dispatch(setNewsList(news.concat(newsList)));
        return newsList;
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setIsNeedLoading(false);
        setRefreshing(false);
        setLimitNews(0);
        setPage(1);
      });
  };

  useEffect(() => {
    if(!isSearching){
      getNewsList();
    }
  }, [page, refreshing, isSearching]);

  const onRefresh = (): void => {
    setIsSearching(false);
    dispatch(setNewsList([]));
    setPage(1);
    setRefreshing(true);
  };

  const onEndReached = (): void => {
    if (!isNeedLoading) {
      const limit = Math.ceil(limitNews / 10) * 10;
      if ((page + 1) * 10 <= limit) {
        setPage(page + 1);
      }
    }
  };

  const onSearchPressed = (searchText: string): void => {
    if (searchText.length) {
      setIsSearching(true);

      const filterNewsList = news.filter(innerItem =>
        innerItem.title.toLowerCase().includes(searchText.toLowerCase())
      );

      dispatch(setNewsList(
        filterNewsList.map(innerItem => ({
          ...innerItem
        }))
      ));
    }
  };

  const onClosePressed = (): void => {
    setIsSearching(false);
    onRefresh();
  };

  return loading ? (
    <Spinner />
  ) : (
    <NewsListView
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      refreshing={refreshing}
      onSearchPressed={onSearchPressed}
      onClosePressed={onClosePressed}
    />
  );
};

export default NewsList;