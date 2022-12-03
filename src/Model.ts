export interface home {
  title: string;
  thumb: string;
  endpoint: string;
  type: string;
  uploaded_on: string;
}

export interface Search {
  title: string;
  thumb: string;
  endpoint: string;
  type: string;
  uploaded_on: string;
}

export interface detail {
  author: string;
  chapter: string[];
  genre_list: string[];
  status: string;
  synopsis: string;
  thumb: string;
  title: string;
  type: string;
}

export interface genre {
  genre_name: string[];
}

export interface FormData {
  search: string;
}
