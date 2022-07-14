
import React from 'react'
import Container from './style';

//icon
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const MenuRight = () => {
  return (
    <Container>
      <VideoCallOutlinedIcon sx={{ fontSize: 27}} className='icons'/>
      <AppsIcon sx={{ fontSize: 27}} className='icons'/>
      <NotificationsNoneOutlinedIcon sx={{ fontSize: 27}} className='icons'/>
      <AccountCircleIcon sx={{ fontSize: 27}} className='icons'/>
    </Container>
  )
}

export default MenuRight;
