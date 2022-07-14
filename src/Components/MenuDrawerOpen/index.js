import React from 'react'
import Container from './style';
//Components
import { Button } from '@mui/material';
//icon
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export const MenuDrawerOpen = () => {
  return (
    <Container>
            <Button  className='Menu'  onClick={() => {
    alert('clicked');
  }}>
    <MenuIcon/>
    </Button>
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <HomeIcon sx={{ fontSize: 24}}/>
             Home
        </Button>
       
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <ExploreOutlinedIcon sx={{ fontSize: 24}}/>
            Explore
        </Button>
        
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <SubscriptionsOutlinedIcon sx={{ fontSize: 24}}/>
            Subscriptions
        </Button>
        
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <YouTubeIcon sx={{ fontSize: 24}}/>
            Originals
        </Button>
        
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <PlayCircleIcon sx={{ fontSize: 24}}/>
            YouTube Music
        </Button>
        
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <LibraryMusicIcon sx={{ fontSize: 24}}/>
            Library
        </Button>
        
        <Button sx={{color:'black', display: 'flex', flexDirection: 'column', fontSize:8, margin:1}} variant="text">
            <FileDownloadOutlinedIcon sx={{ fontSize: 24}}/>
            Downloads
        
        </Button>
    </Container>
  )
}

export default MenuDrawerOpen;