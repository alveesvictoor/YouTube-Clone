
import React from 'react'
import Container from './style';
import logo from './logo.svg';
import { Button } from '@mui/material';

//icons
import MenuIcon from '@mui/icons-material/Menu';

export const MenuLeft= () => {
  return (
    <Container>
    <Button  className='Menu'  onClick={() => {
    alert('clicked');
  }}>
    <MenuIcon/>
    </Button>
    <Button>
    <img src={logo} className="logo" alt='Logo'/>
    </Button>
    </Container>
  )
}

export default MenuLeft;
