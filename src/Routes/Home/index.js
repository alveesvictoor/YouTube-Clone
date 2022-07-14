import React from 'react'


import Container from './style'
import GridFull from '../../Components/Feed/GridFull';
import SuggestionBar from './SuggestionBar'
export const Home = () => {
  return (
    <Container>

      <SuggestionBar/>
      <section className='grid'>
          <GridFull/>
          <GridFull/>
          <GridFull/>
          <GridFull/>
          <GridFull/>
          <GridFull/>
          <GridFull/>
          <GridFull/>
      </section>
    </Container>
  )
}
export default Home;