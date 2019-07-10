export interface DocListItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  user_id: number;
  book_id: number;
  format: string;
  public: number;
  status: number;
  likes_count: number;
  comments_count: number;
  content_updated_at: Date;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  first_published_at: Date;
  draft_version: number;
  last_editor_id: number;
  word_count: number;
  cover: string;
  custom_description: string;
  last_editor: object;
  book: null;
  _serializer: string;
}

export interface SearchDocItem {
  id: string;
  type: string;
  abstract: string;
  title: string;
  slug: string;
  url: string;
  book_name?: string;
  group_name?: string;
}

export interface DocDetail {
  id: number;
  slug: string;
  title: string;
  book_id: number;
  book: object;
  user_id: number;
  creator: object;
  format: string;
  body: string;
  body_draft: string;
  body_html: string;
  body_lake: string;
  public: number;
  status: null;
  likes_count: number;
  comments_count: number;
  content_updated_at: Date;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  first_published_at: Date;
  word_count: number;
  cover: string;
  description: string;
  custom_description: string;
  _serializer: string;
}

export interface DocPager {
  prev: DocPagerItem;
  next: DocPagerItem;
}

export interface DocPagerItem {
  title: string;
  slug: string;
  _serializer: string;
}
