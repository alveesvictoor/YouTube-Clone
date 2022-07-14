import React from 'react'
import Container from './style';
import { Link } from "react-router-dom";

//Components
import { Button } from '@mui/material';
//icon

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MenuDrawerOpen = () => {
  return (
    <Container>
    <div className='section'>

    <Link to="/">
        <Button className='button' variant="text">
            <HomeIcon className='ico' />
             Home
        </Button>
    </Link>
    <Link to="/">

        <Button className='button' variant="text">
            <ExploreOutlinedIcon  className='ico'/>
            Explore
        </Button>
        </Link>

    <Link to="/">
        <Button className='button' variant="text">
            <SubscriptionsOutlinedIcon className='ico'/>
            Shorts
        </Button>
        </Link>

    <Link to="/">   
        <Button className='button' variant="text">
            <SubscriptionsOutlinedIcon className='ico'/>
            Subscriptions
        </Button>
        </Link>

    <Link to="/">    
        <Button className='button' variant="text">
            <YouTubeIcon className='ico'/>
            Originals
        </Button>
        </Link>

    <Link to="/">    
        <Button className='button' variant="text">
            <PlayCircleIcon className='ico'/>
            YouTube Music
        </Button>
        </Link>
   
    <Link to="/">
        <div className='divider'></div>
        <Button className='button' variant="text">
            <LibraryMusicIcon className='ico'/>
            Library
        </Button>
    </Link>

    <Link to="/">    
        <Button className='button' variant="text">
            <LibraryMusicIcon className='ico'/>
            History
        </Button>
        </Link>
    
    <Link to="/">
        <Button className='button' variant="text">
            <LibraryMusicIcon className='ico'/>
            Your videos
        </Button>
        </Link> 
    
    <Link to="/">
        <Button className='button' variant="text">
            <LibraryMusicIcon className='ico'/>
            Your movies
        </Button>
        </Link>
    
    <Link to="/">
        <Button className='button' variant="text">
            <LibraryMusicIcon className='ico'/>
            Watch later
        </Button>
        </Link>
    
    <Link to="/">       
        <Button className='button' variant="text">
            <FileDownloadOutlinedIcon className='ico'/>
            Downloads
        </Button>
        </Link> 
    
    <Link to="/">
        <Button className='button' variant="text">
            <ExpandMoreIcon className='ico'/>
            Show more
        </Button>
        </Link>
    
        </div>
    
    
        <div className='subscriptions-section'>
            <h2>Subscriptions</h2>

        </div>
    </Container>
  )
}

export default MenuDrawerOpen;