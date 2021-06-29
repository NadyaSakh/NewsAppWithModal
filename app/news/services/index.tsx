import {Error} from "../../common/types";

interface RequestParams {
  url: string;
  method: string;
  body?: BodyInit_;
}

export const fetchData = async <T,>(
  requestParams: RequestParams
): Promise<T | Error> => {
  try {
    const { url, method, body } = requestParams;

    const headers = new Headers({
      Accept: 'application/json'
    });

    const requestInit: RequestInit = {
      method,
      headers,
      body
    };

    const response = await fetch(url, requestInit);

    console.log('ResponseStauts = ', url, method, response.status, requestInit);

    if (response.status >= 200 && response.status < 400) {
      const responseJSON = (await response.json()) as T;

      return responseJSON;
    }

    const responseJSONError = (await response.json()) as Error;
    return responseJSONError;
  } catch (error) {
    return Promise.reject(error);
  }
};
