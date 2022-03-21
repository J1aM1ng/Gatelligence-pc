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
    title: '市场分析 潜力巨大',
    content:
      '端云结合 + 人工智能 基于”端云结合“的理念进行程序设计 实现双侧算力 高效运行'
  },
  {
    title: '创新价值 成果显著',
    content: '业界最佳解决方案 高效率 高准确率 高可信度 高流畅性'
  },
  {
    title: '功能丰富 深耕领域',
    content:
      '教学视频一键分段 AI模型自动打分 基于用户偏好个性推荐'
  },
  {
    title: '创新意义 技术积累',
    content:
      '六项实验室技术积累相关专利，八项学生自主申请专利'
  },
  {
    title: '商业闭环 前景理想',
    content:
      '集成 B 端和 C 端商业推广 融汇免费版 付费制 订阅制三大盈利模式'
  },
  {
    title: '政策风向',
    content:
      '响应国家关于美育工作的要求 扎根一线 传递主旋律正能量'
  }
];

const Content = () => {
  const [downloadNum, setDownloadNum] = useState('');
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
          <Box sx={{ flexGrow: 1 }} my={14} ml={3}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant='h1'>起舞弄“轻影”</Typography>
                <Typography variant='h4' sx={{ color: '#fd7901' }}>
                  ———— AI赋能的全新线上舞蹈解决方案
                </Typography>
                <Box mt={2}>
                  <Typography variant='h6'>轻影项目组 倾情打造</Typography>
                </Box>
                <Box mt={1}>
                  <Typography variant='h6'>
                    人人皆可舞 后疫情时代解决方案
                  </Typography>
                </Box>

                <Box sx={{ mt: 5 }}>
                  <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      height: '40px',
                      lineHeight: '38px',
                      width: '176px',
                      textAlign: 'center',
                      mr: 1,
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
                      href='https://app.cupof.beer:8083/download'
                      onClick={() => fetchData()}
                    >
                      {'立即体验'}
                    </Link>
                  </Box>
                  <Box
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
                    {/* <Link
                      color={'#000000'}
                      variant='h6'
                      underline='none'
                      href='#'
                      cursor='default'
                    > */}
                    <Typography
                      color={'#000000'}
                      variant='h6'>
                      {`${downloadNum} 次安装`}
                      <FileDownloadOutlinedIcon sx={{ position: 'relative', left: '10px', top: '4px' }} />
                    </Typography>
                    {/* </Link> */}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img
                  src='https://s4.ax1x.com/2022/03/01/bMoC24.jpg'
                  alt='LightShadow'
                  width='500px'
                />
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle' />
          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>
              Why LightShadow?
            </Typography>
            <Typography variant='h6' sx={{ textAlign: 'center' }} my={2}>
              本项目是一套AI赋能全新线上舞蹈解决方案
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3, mt: 3 }}
                >
                  {description.map((item) => (
                    <Grid item xs={4} key={item.title}>
                      <OutlinedCard title={item.title} content={item.content} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle' sx={{ mt: 5 }} />
          <Typography variant='h3' sx={{ textAlign: 'center', mt: 5 }}>
            团队成员
          </Typography>
          <Swiper />
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Content
