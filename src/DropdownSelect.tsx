import { useState } from "react"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import Select, { SelectChangeEvent } from '@mui/material/Select';



const sortOptions = [ "Order added", "By title ascending", "By title descending"]
 
export default function DropdownSelect() {
  const [sort, setSort] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {

    setSort(parseInt(event.target.value));
  };

  return (
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
  );
}