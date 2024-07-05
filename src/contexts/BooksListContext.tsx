import { BookData, BooksListContextType } from "./@types.BookData";

import { createContext, useState } from "react";

  
export const BooksListContext = createContext<BooksListContextType | null> (
    null
)

const writeToCache = (booksList: BookData[]) => localStorage.setItem("booksList", JSON.stringify(booksList));

const BooksListContextProvider = (props: any) => {

  const [booksList, setBooksList] = useState<BookData[]>(JSON.parse(localStorage.getItem("booksList") || '[]'));

  const addBook = (bookData: BookData) => {
    const newBook: BookData = bookData
    const newBooksList = [...booksList, newBook]
    setBooksList(newBooksList)
    writeToCache(newBooksList)
  }
  
  const updateBook = (id: string, newBookData: BookData) => {
    
    const newBooksList = [...booksList].map((book) => {
      if (book.id === id) {
        book = newBookData;
      }
      return book})
    setBooksList(newBooksList)
    writeToCache(newBooksList)
  }

  return (
    <>
      {
        <BooksListContext.Provider
          value={{
            booksList,
            addBook,
            updateBook,
          }}
        >
          {props.children}
        </BooksListContext.Provider>
      }
    </>
  );
};

export default BooksListContextProvider

