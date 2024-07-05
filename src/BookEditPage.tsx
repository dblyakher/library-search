import { useState, useContext } from 'react';
import "./BookList"
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BooksListContextType, BookSelectedContextType } from './contexts/@types.BookData';
import { BooksListContext } from './contexts/BooksListContext';
import { BookSelectedContext } from './contexts/BookSelectedContext';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const BookEditPage = () => {
  const { updateBook } = useContext(BooksListContext) as BooksListContextType

  const { bookSelected } = useContext(BookSelectedContext) as BookSelectedContextType

  const [ newBookData, setNewBookData ] = useState(bookSelected!)

  const navigate = useNavigate()

  const handleUpdate = async (bookID: any) => {
    updateBook(bookID, newBookData)
    navigate("/")
  }
  
  const handleCancel = () => {
    navigate("/")
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h1" gutterBottom sx={{fontSize: 48, fontWeight: "bold", mt: 2}}>
        Edit Book
      </Typography>
      <Box sx={{minWidth: 480, maxWidth: 600, mx: "auto", mt:4}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography sx={{mb: 1}}>ID</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography sx={{mb: 1}}>{bookSelected?.id}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{mb: 1}}>Title</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField sx={{ width: "100%"}}
              id="outlined-size-small"
              InputProps={{
                sx: {
                    "& input": {
                        textAlign: "center"
                    }
                }
              }}
              label={"Title"}
              value={newBookData.title}
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewBookData({...newBookData, title: event.target.value});
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{mb: 1}}>Author</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField sx={{ width: "100%"}}
              id="outlined-size-small"
              InputProps={{
                sx: {
                    "& input": {
                        textAlign: "center"
                    }
                }
              }}
              label={"Author"}
              value={newBookData?.authors}
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewBookData({...newBookData, authors: event.target.value});
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{mb: 1}}>Published</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField sx={{ width: "100%"}}
              id="outlined-size-small"
              InputProps={{
                sx: {
                    "& input": {
                        textAlign: "center"
                    }
                }
              }}
              label={"Published"}
              value={newBookData?.publishDate}
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewBookData({...newBookData, publishDate: parseInt(event.target.value)});
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{mb: 1}}>Description</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField sx={{ width: "100%"}}
              id="outlined-size-small"
              InputProps={{
                sx: {
                    "& input": {
                        textAlign: "center"
                    }
                }
              }}
              label={"Description"}
              value={newBookData?.description}
              size="medium"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewBookData({...newBookData, description: event.target.value});
              }}
            />
          </Grid>
          <Box sx={{display:"flex", mt: 4, mx: "auto", gap: 4}}>
            
              <Button sx={{ width: "180px", height: "100%" }} variant="contained" onClick={() => handleUpdate(bookSelected?.id)}>Save</Button>
          
              <Button sx={{ width: "180px", height: "100%" }} variant="outlined" onClick={handleCancel}>Cancel</Button>          
           
          </Box>
          
        </Grid>
      </Box>
    </Box>
  )
}

export default BookEditPage