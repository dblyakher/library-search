
export interface BookData {
  id: string
  title: string,
  publishDate: number,
  authors: string,
  description: string
}

export type BooksListContextType = {
  booksList: BookData[] | [];
  addBook: (bookData: BookData) => void;
  updateBook: (id: string, newBookData: BookData) => void;
};

export type BookSelectedContextType = {
  bookSelected: BookData | null
  getBookSelected: (bookID: string) => void;
};
