import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import { BooksListContextType} from './contexts/@types.BookData';
import { BooksListContext } from './contexts/BooksListContext';
import { Alert } from '@mui/material';

export default function BookSearch() {
  
  const [bookID, setBookID] = useState<string>("");

  const [idError, setIdError] = useState<Boolean>(false)

  const { addBook, booksList } = useContext(BooksListContext) as BooksListContextType

  const handleClick = async (bookID: string) => {
    try {
      const response = await fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${bookID}&jscmd=data&format=json`)  
      const json = await response.json()
      const bookProperties = json[`OLID:${bookID}`]

      const newBookData = {
        id: bookID,
        title: bookProperties.title,
        publishDate: bookProperties.publish_date,
        authors: bookProperties.authors[0].name,
        description: `${bookProperties.title}, written by ${bookProperties.authors[0].name}. Published ${bookProperties.publish_date}`
      }
      
      if (!booksList.some((book) => book.id === bookID)) {
        addBook(newBookData)
      }

      setBookID("")
      setIdError(false)
    } catch (error) {
      setIdError(true)
    }
  }


  return (
    <Box sx={{ width: "100%", mt: 4, mb: 6}}>
      <Typography sx={{mb: 1}}>Add a book by Open Library ID Number</Typography>
      <Grid container columns={16} columnSpacing={2}>
        <Grid xs={12}>
          <TextField sx={{ width: "100%"}}
            id="outlined-size-small"
            InputProps={{
              sx: {
                  "& input": {
                      textAlign: "center"
                  }
              }
            }}
            label={"OLID"}
            value={bookID}
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setBookID(event.target.value);
            }}
          />
        </Grid>
        <Grid xs={4}>
          <Button sx={{ width: "100%", height: "100%" }} variant="contained" onClick={() => handleClick(bookID)}>Add</Button>
        </Grid>
      </Grid>
      {idError ? <Alert sx={{mt: 2}} severity="error">Unable to fetch this OLID.</Alert> : <></>}
    </Box>
  );
}