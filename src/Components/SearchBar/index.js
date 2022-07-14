import React from 'react'
import Container from './style';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


export const SearchBar = () => {
  return (
    <Container>
        <input typeof='text' placeholder='Search'></input>
        <SearchIcon sx={{ fontSize: 34}} className='search-icon'/>
        <KeyboardVoiceIcon sx={{ fontSize: 10}} className='voice-icon'/>
    </Container>
  )
}

export default SearchBar;