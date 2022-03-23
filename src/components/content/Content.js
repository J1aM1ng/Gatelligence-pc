import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import Grid from '@mui/material/Grid'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import OutlinedCard from './OutlinedCard'
import { Divider } from '@mui/material'
import Swiper from '../Swiper';
// import { CenterFocusStrong } from '@mui/icons-material';
// import headerImg from '../../img/header.jpeg'
import styled from '@emotion/styled';

const mobileHeader = 'https://s1.ax1x.com/2022/03/23/q3JXSs.jpg';
const headerImg = 'https://s1.ax1x.com/2022/03/23/q3akE6.jpg'
const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontSize: '4.5rem',
        fontWeight: '900'
      },
      h3: {
        fontSize: '3rem',
        fontWeight: '800'
      },
      h4: {
        fontSize: '1.6rem',
        fontWeight: '700'
      }
    }
  })
)

const description = [
  {
    Url: 'https://s1.ax1x.com/2022/03/23/q3PrQI.jpg'
  },
  {
    Url: 'https://s1.ax1x.com/2022/03/23/q3P5Ss.jpg'
  },
  {
    Url: 'https://s1.ax1x.com/2022/03/23/q3Poyq.jpg'
  },
  {
    Url: 'https://s1.ax1x.com/2022/03/23/q3PTO0.jpg'
  },
  {
    Url: 'https://s1.ax1x.com/2022/03/23/q3PXY4.jpg'
  }
];

const Content = () => {
  const [downloadNum, setDownloadNum] = useState('');
  const isMobile = document.documentElement.clientWidth < 450;
  useEffect(() => {
    axios.get('https://app.cupof.beer:8083/download-count').then((res) => {
      // console.log(res);
      setDownloadNum(res.data.Count);
    }).catch((err) => {
      console.log(err);
    });
  })
  const fetchData = () => {
    setTimeout(() => {
      axios.get('https://app.cupof.beer:8083/download-count').then((res) => {
        // console.log(res);
        setDownloadNum(res.data.Count);
      }).catch((err) => {
        console.log(err);
      });
    }, 1000)
  };
  const styles = {
    center: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundImage: `url(${isMobile ? mobileHeader : headerImg})`,
      backgroundSize: '100% 100%',
      width: '100%',
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 100,
      paddingBottom: 150
    },
    productIssue: {
      paddingBottom: 50,
      marginLeft: 15
    },
    card: {
      width: 100
    },
    mobilecard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth='lg'
        >
          <Box sx={{ flexGrow: 1 }} my={14} ml={3} style={styles.header}>
            <Grid container spacing={1}
              justify="flex-end"
              alignItems="center">
              <Grid item xs={12}>
                <Typography>&nbsp;</Typography>
                <Typography>&nbsp;</Typography>
                <Box style={styles.center}>
                  {isMobile ?
                    <Typography variant='h3' style={{ fontWeight: 'bold', textAlign: 'center' }}>凝智成林语义摘要综合服务平台</Typography>
                    :
                    <Typography variant='h2' style={{ fontWeight: 'bold' }}>凝智成林语义摘要综合服务平台</Typography>
                  }
                </Box>
                <Box style={styles.center}>
                  <Typography variant='h4' sx={{ color: '#fd7901' }}>
                  </Typography>
                </Box>

                <Box mt={2} style={styles.center}>
                  {isMobile ?
                    <Typography variant='h6' style={{textAlign: 'center'}}>凝智项目组 倾情打造&nbsp;&nbsp; | &nbsp;&nbsp;实现音视频高质量转化摘要总结新模式</Typography>
                    :
                    <Typography variant='h6'>凝智项目组 倾情打造&nbsp;&nbsp; | &nbsp;&nbsp;实现音视频高质量转化摘要总结新模式</Typography>
                  }

                </Box>
                <Box mt={1} style={styles.center}>
                  <Typography variant='h6'>

                  </Typography>
                </Box>
                <Box sx={{ mt: 5 }} style={styles.center}>
                  <Box
                    component='span'
                    sx={isMobile ? {
                      display: 'inline-block',
                      height: '40px',
                      lineHeight: '38px',
                      width: '300px',
                      textAlign: 'center',
                      mr: 1,
                      p: 1,
                      background: 'black',
                      '&:hover': {
                        opacity: 0.7
                      }
                    } : {
                      display: 'inline-block',
                      height: '40px',
                      lineHeight: '38px',
                      width: '300px',
                      textAlign: 'center',
                      mr: 1,
                      p: 1,
                      background: '#7B68EE',
                      '&:hover': {
                        opacity: 0.7
                      }
                    }}
                  >
                    <Link
                      color={'#f8f4f8'}
                      variant='h6'
                      underline='none'
                      href='https://app.cupof.beer:8083/download'
                      onClick={() => fetchData()}
                    >
                      {`立即体验\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0 ${downloadNum} 次安装`}
                      <FileDownloadOutlinedIcon sx={{ position: 'relative', left: '10px', top: '4px' }} />
                    </Link>
                  </Box>
                  {/* <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      height: '38px',
                      lineHeight: '38px',
                      width: '176px',
                      textAlign: 'center',
                      ml: 3,
                      p: 1,
                      '&:hover': {
                        opacity: 0.7
                      }
                    }}
                  >
                    <Typography
                      color={'#000000'}
                      variant='h6'>
                      {`${downloadNum} 次安装`}
                      <FileDownloadOutlinedIcon sx={{ position: 'relative', left: '10px', top: '4px' }} />
                    </Typography>
                  </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle' />
          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Box style={styles.productIssue}>
              <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                产品理念 &nbsp;| &nbsp;如何让每一次学习更加高效？
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  // rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 2, mt: 2 }}
                  columns={15}
                >
                  {description.map((item) => (
                    <Grid item xs={!isMobile ? 3 : 15} key={item.Url} style={styles.card}>
                      <OutlinedCard Url={item.Url} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle' sx={{ mt: 5 }} />
          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Box style={styles.productIssue}>
              <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                产品实力 &nbsp;| &nbsp;如何让凝智3.0真正走入大众视野？
              </Typography>
            </Box>
            <Swiper />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Content
