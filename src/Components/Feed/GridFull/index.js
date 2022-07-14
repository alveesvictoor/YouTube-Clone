import React from 'react'
import Container from './style';
import Thumb from './thumb.png';
import Avatar from './channels-profile.jpeg'

export const GridFull = () => {
  return (
    <Container>

        <div className='thumbnail'>
          <img src={Thumb} alt=''></img>
          <span className='video-time'>2:55</span>
        </div>
        <div id='meta'>
        <img className='channel-avatar' src={Avatar}></img>
            <div className='infos'>
              <h1 className='video-tittle'>How to Clone Youtube</h1>
              <span className='channel-name'>Victor Alves</span>
              <span className='video-view'>100M Views * 1 week ago</span>
            </div>
        </div>
    </Container>
    )
}

export default GridFull;