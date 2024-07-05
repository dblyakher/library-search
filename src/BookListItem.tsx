import { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BookSelectedContextType} from './contexts/@types.BookData';
import { BookSelectedContext } from './contexts/BookSelectedContext';
import { useNavigate } from 'react-router-dom';

interface BookListItem {
  id: string
  title: string,
  author: string,
  publishDate: number,
  description: string
}

const BookListItem: React.FC<BookListItem> = ({ id, title, author, publishDate, description}) => {
  const navigate = useNavigate()

  const { getBookSelected } = useContext(BookSelectedContext) as BookSelectedContextType
  
  const handleClick = (id: string) => {
    getBookSelected(id)
    navigate("/edit")
  }
  return (
    <div style={{ cursor: 'pointer' }} onClick={()=> handleClick(id)}>
      <ListItem alignItems="flex-start" sx={{p: 2}}>
        <ListItemText
          primary={
            <Box sx={{display: "flex", width: "100%", mb: 2}}>
              <Typography sx={{fontWeight: 'bold'}}>
                {title}
              </Typography>
              <Typography sx={{ml:"6px"}}>
                {`(${publishDate})`}
              </Typography>
              <Typography sx={{ fontStyle: 'italic', ml: "auto", mr: "5%"}}>
                {author}
              </Typography>
            </Box>
          }
          secondary={
            <>
              <Typography noWrap>
                {description}
              </Typography>
            </>
          }
        />
      </ListItem>
      
      <Divider sx={{width: 3/4, mx: "auto"}}  component="li" />
    </div>
  )
}

export default BookListItem