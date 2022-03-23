import React, { useMemo } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.css'

import { Pagination, Autoplay} from 'swiper'

export default () => {
  const achievementList = useMemo(() => {
    return [
      {
        img: 'https://s1.ax1x.com/2022/03/23/q3AanI.jpg',
      },
      {
        img: 'https://s1.ax1x.com/2022/03/23/q3Ay9g.jpg',
      },
      {
        img: 'https://s1.ax1x.com/2022/03/23/q3Agjs.jpg',
      },
      {
        img: 'https://s1.ax1x.com/2022/03/23/q3A5NT.jpg',
      },
      {
        img: 'https://s1.ax1x.com/2022/03/23/q3AI4U.jpg',
      },
      {
        img: 'https://s1.ax1x.com/2022/03/23/q3ATCF.jpg',
      },
    ]
  }, [])
  return (
    <>
      <Swiper
        initialSlide={0}
        slidesPerView={3}
        spaceBetween={20}
        // pagination={{
        //   clickable: true
        // }}
        centeredSlides={true}
        // allowTouchMove={false}
        // longSwipes={false}
        // followFinger={false}
        modules={[Pagination, Autoplay]}
        loop
        className='mySwiper'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        {achievementList.map((item) => (
          <SwiperSlide key={item.img}>
            <BasicCard
              Url={item.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export function BasicCard(props) {
  const { Url } = props
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px'
        }}
      >
        <img
          style={{
            height: '300px',
            width: '450px',
          }}
          src={Url}
          alt='Img'
        />
      </Box>
    </Box>
  )
}
