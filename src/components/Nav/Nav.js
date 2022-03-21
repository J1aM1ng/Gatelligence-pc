import React from 'react'
// import Link from '@mui/material/Link'
import './Nav.css'
// import Box from '@mui/material/Box'

export default class Hello extends React.Component {
  render(){
    return (
      <div className='nav-bar'>
        <div className='logo'>
          <img
            width='170'
            src='https://s4.ax1x.com/2022/03/01/bM7dDs.png'
            alt='lightshadow logo'
          />
        </div>
        <ul className='button-list'>
          <li>
            {/* <Box
              component='span'
              sx={{
                display: 'inline-block',
                height: '50px',
                lineHeight: '32px',
                width: '160px',
                textAlign: 'center',
                mr: 2,
                p: 1,
                background: '#333333',
                '&:hover': {
                  opacity: 0.7
                }
              }}
            >
              <Link
                color={'#f8f4f8'}
                variant='h6'
                underline='none'
                href='./login'
              >
                {'登录注册'}
              </Link>
            </Box> */}
          </li>
          <li>
            {/* <Link
              href='https://github.com/ChelesteWang/CodeDragger'
              underline='none'
              variant='h6'
              sx={{ color: '#000' }}
            >
              <Box sx={{ p: 1, mr: 2 }}>Github link</Box>
            </Link> */}
          </li>
        </ul>
      </div>
    )
  }
}
