import { Box } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <>
    <div>대결 List</div>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={top100Films}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
  />
  
  <Box id="wrapper" sx={styles.bottom}>
    <SimpleBottomNavigation selected={""} />
  </Box></>
    
  );
}

const styles = {
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '음식'},
  { label: '스포츠'},
  { label: '노래'},
  { label: '게임'},
  { label: '주먹'},
];