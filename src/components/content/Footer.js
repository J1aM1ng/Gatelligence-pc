import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'

const isMobile = document.documentElement.clientWidth < 450;
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333333', color: '#f8f4f8' }}>
      <Container>
        <Box sx={isMobile ? {
          height: '150px',
          marginTop: '65px',
          width: `${document.documentElement.clientWidth}`
        }
          : { height: '150px', marginTop: '65px' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Box style={isMobile ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              } : {}}>
                <h1>Gatelligence</h1>
              </Box>

              <Box sx={{ fontSize: '12px' }} style={isMobile ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              } : {}}>
                © 2022 凝智团队 官方网站
              </Box>
              {/* <Box sx={{ fontSize: '12px' }}>粤ICP备 10241024号</Box> */}
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                mt={2}
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {/* {footerNavigationTitle.map((item) => {
                  return (
                    <Grid item xs={4}>
                      <Box sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                        {item}
                      </Box>
                    </Grid>
                  )
                })} */}

                {/* {footerNavigation.map((item) => {
                  return (
                    <Grid item xs={4}>
                      <Box sx={{ fontSize: '12px' }}>
                        <Link
                          color={'#000000'}
                          underline='none'
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </Box>
                    </Grid>
                  )
                })} */}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={3}
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {/* <img
                style={{
                  height: '84px',
                  margin: '14px 0 8px',
                  marginTop: '30px',
                  marginBottom: '5px',
                  width: '84px'
                }}
                src={qr}
                alt='logo'
              /> */}
              {/* <Box sx={{ fontSize: '12px' }}>扫码进群咨询</Box> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
export default Footer
