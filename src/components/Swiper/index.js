import React, { useMemo } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.css'

// import required modules
import { Pagination } from 'swiper'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const authorList = useMemo(() => {
    return [
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1L9c6.jpg',
        name: '刘雪炜',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/ChelesteWang'
      },
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1Lp1x.jpg',
        name: '邵嘉明',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/guxuanye'
      },
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1LCjK.jpg',
        name: '张弛',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1LFBD.jpg',
        name: '徐子涵',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/rexjz'
      },
      {
        avatar: 'https://s1.ax1x.com/2022/03/21/qu5TLF.jpg',
        name: '蒋一',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/huangyunt'
      },
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1LEAH.jpg',
        name: '张广泽',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/ehxie'
      },
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1LugP.jpg',
        name: '姜九鸣',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/bigflyelephant'
      },
      {
        avatar: 'https://s4.ax1x.com/2022/03/02/b1LKjf.jpg',
        name: '石珺楚玉',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/DawnMagnet'
      },
      {
        avatar: 'https://s1.ax1x.com/2022/03/21/qu5OiR.jpg',
        name: '金俊儒',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/DawnMagnet'
      },
      // {
      //   avatar: 'https://s4.ax1x.com/2022/03/02/b1LlDS.jpg',
      //   name: '雷真',
      //   introduce:
      //     '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
      //   github: 'https://github.com/DawnMagnet'
      // }
    ]
  }, [])
  return (
    <>
      <Swiper
        initialSlide={2}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
        centeredSlides={true}
        modules={[Pagination]}
        className='mySwiper'
      >
        {authorList.map((item) => (
          <SwiperSlide key={item.name}>
            <BasicCard
              avatar={item.avatar}
              name={item.name}
              // introduce={item.introduce}
              github={item.github}
              introduce={''}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export function BasicCard(props) {
  const { avatar, name, introduce} = props
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px'
          }}
        >
          <img
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%'
            }}
            src={avatar}
            alt='avatar'
          />
        </Box>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {name}
        </Typography>
        <Typography variant='body2' sx={{ width: '80%', margin: '0 10%' }}>
          {introduce}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size='small' href={github}>
          GITHUB
        </Button> */}
      </CardActions>
    </Card>
  )
}
