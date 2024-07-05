import "./BookList"
import './App.css';
import Box from '@mui/material/Box';
import BookList from './BookList';
import BookSearch from './BookSearch';
import Typography from '@mui/material/Typography';




const BookSearchPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h1" gutterBottom sx={{fontSize: 48, fontWeight: "bold", mt: 2}}>
        Book Manager
      </Typography>
      <Box sx={{minWidth: 480, maxWidth: 600}}>
        <BookSearch />
        <BookList />
      </Box>
    </Box>
  )
}

export default BookSearchPage