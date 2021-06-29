export type NewsItem = {
  source: source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type source = {
  id: null | string;
  name: string;
}

export type response = {
  status: string;
  totalResults: number;
  articles: NewsItem[];
}

export type NewsItemWithId = {
  id: string;
  source: source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};