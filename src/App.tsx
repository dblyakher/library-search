import "./BookList"
import './App.css';
import BooksListContextProvider from './contexts/BooksListContext';
import BookSelectedContextProvider from './contexts/BookSelectedContext';

import BookSearchPage from './BookSearchPage';
import BookEditPage from './BookEditPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {

  return (
   <>
    <BooksListContextProvider>
      <BookSelectedContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element = {<BookSearchPage />} />
            <Route path="edit" element= {<BookEditPage />} />
          </Routes>
        </BrowserRouter>
      </BookSelectedContextProvider>
    </BooksListContextProvider>
   </>
  );
}


