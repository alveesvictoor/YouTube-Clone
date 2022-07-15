import React from 'react'
import { Button } from '@mui/material'
import ScrollContainer from 'react-indiana-drag-scroll'

import Container from './style'
//Icon
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SuggestionBar = () => {
  return (
    <Container>
     
      
        <ChevronLeftIcon className='arrow left'/>
    
      
      <ScrollContainer className='scroll-bar'>
        <Button className='button'>All</Button>
        <Button className='button'>Music</Button>
        <Button className='button'>Mixes</Button>
        <Button className='button'>Gaming</Button>
        <Button className='button'>Podcast</Button>
        <Button className='button'>Jazz</Button>
        <Button className='button'>Gadgets</Button>
        <Button className='button'>Ambient Music</Button>
        <Button className='button'>Thoughts</Button>
        <Button className='button'>JavaScript</Button>
        <Button className='button'>React</Button>
        <Button className='button'>Web Develop</Button>
        <Button className='button'>Lo-fi</Button>
        <Button className='button'>Music</Button>
        <Button className='button'>Mixes</Button>
        <Button className='button'>Gaming</Button>
        <Button className='button'>Lo-fi</Button>
      </ScrollContainer>

      <ChevronRightIcon className='arrow right'/>
      
    </Container>
    )
}
export default SuggestionBar;