import { useState, useContext, createContext } from 'react';

import { BookData, BooksListContextType, BookSelectedContextType} from './@types.BookData';
import { BooksListContext } from './BooksListContext';


export const BookSelectedContext = createContext<BookSelectedContextType | null> (
    null
)

const BookSelectedContextProvider = (props: any) => {

    const { booksList } = useContext(BooksListContext) as BooksListContextType

    const [bookSelected, setBookSelected] = useState<BookData | null>(null);
  
    
    const getBookSelected = (id: string) => {
        booksList.filter((book: BookData) => {
          if (book.id === id) {
            setBookSelected(book)
          }
        })
      }
  
    return (
      <>
        {
          <BookSelectedContext.Provider
            value={{
              bookSelected,
              getBookSelected
            }}
          >
            {props.children}
          </BookSelectedContext.Provider>
        }
      </>
    );
  };
  
  export default BookSelectedContextProvider