import Config from 'react-native-config';


import { HTTPMethod } from '../common/constants';
import { fetchData } from "../news/services";

type OwnProps = {
  urlBase: string;
};

export const getNewsListFetch = async <T,>({
  urlBase
}: OwnProps): Promise<T> => {
  const url = Config.NEWS_HOST_URL + urlBase;

  try {
    const responseJSON = (await fetchData({
      url,
      method: HTTPMethod.GET
    })) as T;

    return responseJSON;
  } catch (error) {
    return Promise.reject(error);
  }
};
