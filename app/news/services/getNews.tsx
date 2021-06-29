import { NewsItem } from '../types';
import { getNewsListFetch } from '../../services/getNewsListFetch';
import { ResponseStatusString } from '../../common/constants';

type FetchProps = {
  status: string;
  totalResults: number;
  articles: NewsItem[];
};

type OwnProps = {
  pageSize?: number;
  page: number;
};

type ResultProps = {
  count: number;
  newsList: NewsItem[];
};
// https://newsapi.org/v2/top-headlines?country=ru&pageSize=100&apiKey=8dbd435632a04cc8ad04ab9b159c1eed
const getNews = async ({
  pageSize = 10,
  page = 1
}: OwnProps): Promise<ResultProps> => {
  try {
    const news = await getNewsListFetch<FetchProps>({
      urlBase: `?country=ru&pageSize=${pageSize}&page=${page}&apiKey=8b2943e9979442e8944871f4dd9fd1c7`
    });

    if (news.status === ResponseStatusString.OK) {
      return {
        count: news.totalResults,
        newsList: news.articles
      };
    }

    return {
      count: 0,
      newsList: []
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getNews;
