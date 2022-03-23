import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const isMobile = document.documentElement.clientWidth < 450;
const styles = {
  mobilecard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
const outlinedCard = (Url) => (
  <React.Fragment>
    <CardContent style={isMobile ? styles.mobilecard : {}}>
      {/* <Typography variant='h6' component='div' sx={{ mt: 1, color: 'white' }}>
        {title}
      </Typography>
      <Typography variant='body' component='div' sx={{ mt: 3, color: 'white'}}>
        {content}
      </Typography> */}
      <Box
        sx={{
          width: 200,
          height: 300
        }}
        component="img"
        alt="图片"
        src={Url}
      />
    </CardContent>
  </React.Fragment>
)

export default function OutlinedCard({
  Url
}) {
  return (
    <Box sx={{}}>
      <Box>{outlinedCard(Url)}</Box>
    </Box>
  )
}
