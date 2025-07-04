export type blogID = string;

export interface BlogAttributes {
  createdAt: string;
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface Blog {
  id: blogID;
  createdAt: string;
  title: string;
  description: string;
  imgUrl: string;
}

export interface ABlog {
  id: blogID;
  attributes: BlogAttributes;
}

export interface BlogApiResponse {
  data: ABlog[];
}

export interface SingleBlogApiResponse {
  data: ABlog;
}
