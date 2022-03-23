import React from 'react'
import './Nav.css'
import logo from '../../img/成林logo.png'

export default class Hello extends React.Component {
  render(){
    return (
      <div className='nav-bar'>
        <div className='logo'>
          <img
            width='80'
            src={logo}
            alt='凝智成林 logo'
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
