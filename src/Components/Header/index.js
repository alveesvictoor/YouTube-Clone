import React from 'react'
import Container from './style';

//Components
import MenuLeft from '../MenuLeft';
import SearchBar from '../SearchBar';
import MenuRight from '../MenuRight';
//Icons

export const Header = () => {
  return (
    <Container>
    <MenuLeft/>
    <SearchBar />
    <MenuRight/>
    </Container>
  )
}

export default Header;