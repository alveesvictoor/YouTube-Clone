import React from 'react'
import Container from './style';
import { Link } from "react-router-dom";

//Components
import { Button } from '@mui/material';
//icons


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
        <Link to="/">
        <Button className='Button' variant="text">
            <HomeIcon sx={{ fontSize: 24}}/>
             Home
        </Button>
        </Link>

        <Link to="/feed/explore">
        <Button className='Button' variant="text">
            <ExploreOutlinedIcon sx={{ fontSize: 24}}/>
            Explore
        </Button>
        </Link>
        <Link to="/feed/subscriptions">
        <Button className='Button' variant="text">
            <SubscriptionsOutlinedIcon sx={{ fontSize: 24}}/>
            Subscriptions
        </Button>
        </Link>
        <Link to="/">
        <Button className='Button' variant="text">
            <YouTubeIcon sx={{ fontSize: 24}}/>
            Originals
        </Button>
        </Link>
        <a href='https://music.youtube.com/'>
        <Button className='Button' variant="text">
            <PlayCircleIcon sx={{ fontSize: 24}}/>
            YouTube Music
        </Button>
        </a>
        <Link to="/feed/library">
        <Button className='Button' variant="text">
            <LibraryMusicIcon sx={{ fontSize: 24}}/>
            Library
        </Button>
        </Link>
        <Link to="/feed/downloads">
        <Button className='Button' variant="text">
            <FileDownloadOutlinedIcon sx={{ fontSize: 24}}/>
            Downloads
        
        </Button>
        </Link>
    </Container>
  )
}

export default MenuDrawerOpen;