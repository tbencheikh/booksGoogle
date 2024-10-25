// src/types/bookTypes.ts

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  imageLinks?: ImageLinks;
  language?: string;
  previewLink?: string;
}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface BookCardProps {
  book: Book;
  onSeeMore: (book: Book) => void;
}

export interface BookDetailProps {
  book: VolumeInfo;
  onClose: () => void;
}

export interface BookListProps {
  books: Book[];
  onSeeMore: (book: Book) => void;
}

export interface NavBarProps {
  onSearch: (query: string) => void;
}
export interface SearchBarProps {
  onSearch: (query: string) => void;
}

// src/types/errorTypes.ts

export interface FetchError extends Error {
  name: string;
  message: string;
}
