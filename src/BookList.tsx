import { useState, useContext } from 'react';
import List from '@mui/material/List';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import BookListItem from './BookListItem';
import { BooksListContext } from './contexts/BooksListContext';
import { BookData, BooksListContextType} from './contexts/@types.BookData';



const BookList = () => {
  const { booksList } = useContext(BooksListContext) as BooksListContextType

  const sortOptions = [ "Order added", "By title ascending", "By title descending"]

  const [sort, setSort] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {

    setSort(parseInt(event.target.value));
  };

  const sortAscending = (booksList:BookData[]) => {
    const ascendingList = [...booksList].sort((a,b) => {
      console.log(booksList)
      if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
      }
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      }
      return 0;
    });
    return ascendingList
  }


const sortDescending = (booksList:BookData[]) => {
  const descendingList = [...booksList].sort((a,b) => {
    console.log(booksList)
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return -1;
    }
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  return descendingList
}

  
  let booksListItems
  
  if (sort === 0) {
    booksListItems = booksList.map((book:BookData) => {
      return(
        <BookListItem id={book.id} title={book.title} author={book.authors} publishDate={book.publishDate} description={book.description}/>
      )
    })
  } else if (sort === 1) {
    const sortedAscendingList = sortAscending(booksList)
    
    booksListItems = sortedAscendingList.map((book:BookData) => {
      return(
        <BookListItem id={book.id} title={book.title} author={book.authors} publishDate={book.publishDate} description={book.description}/>
      )
    })
  } else {
    const sortedDescendingList = sortDescending(booksList)
    
    booksListItems = sortedDescendingList.map((book:BookData) => {
      return(
        <BookListItem id={book.id} title={book.title} author={book.authors} publishDate={book.publishDate} description={book.description}/>
      )
    })
  }

  return (
    <Box sx={{minWidth: 480, maxWidth: 600, mx: "auto"}}> 
      <Box sx={{ pt: 2, width: 240, ml: "auto" }}>
      <Typography>Sort order</Typography>
        <FormControl fullWidth size="small" sx={{textAlign: "end"}}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={`${sort}`}
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value={0}>{sortOptions[0]}</MenuItem>
            <MenuItem value={1}>{sortOptions[1]}</MenuItem>
            <MenuItem value={2}>{sortOptions[2]}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper', mx: "auto" }}>
        {booksListItems}
      </List>
    </Box>
  );
}

export default BookList