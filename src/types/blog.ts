export interface IVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  language: 'English' | 'Bangla' | 'Hindi' | string;
  description: string;
}

export type IBlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; level: 2 | 3 | 4 }
  | { type: 'code'; language: string; code: string; filename?: string }
  | { type: 'list'; items: string[] };

export interface IBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentBlocks: IBlogContentBlock[];
  image: string;
  category: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  videos?: IVideo[];
  featured?: boolean;
  relatedPosts?: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}
