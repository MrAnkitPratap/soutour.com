

import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import { Instagram as InstagramIcon, Facebook as FacebookIcon, YouTube as YoutubeIcon, Twitter as TwitterIcon, Call as CallIcon } from '@mui/icons-material';
import logo from '../assets/souTour.png'; 

const Contact = () => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', p: '20px', backgroundImage: 'radial-gradient(circle 325px at 19.2% 64.8%, rgba(254,62,101,1) 9.7%, rgba(166,24,146,1) 91.3%)' }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: '20px', md: '0' } }}>
          <img src={logo} alt="logo" className='contact-logo' />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ width: '100%', maxWidth: 400, borderRadius: '20px', boxShadow: '0 0 11px rgba(33,33,33,.2)', mb: '20px' }}>
            <CardContent>
              <Typography variant='h4' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><InstagramIcon sx={{ mr: '10px' }} />Instagram</Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', maxWidth: 400, borderRadius: '20px', boxShadow: '0 0 11px rgba(33,33,33,.2)', mb: '20px' }}>
            <CardContent>
              <Typography variant='h4' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><FacebookIcon sx={{ mr: '10px' }} />Facebook</Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', maxWidth: 400, borderRadius: '20px', boxShadow: '0 0 11px rgba(33,33,33,.2)', mb: '20px' }}>
            <CardContent>
              <Typography variant='h4' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><YoutubeIcon sx={{ mr: '10px' }} />Youtube</Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', maxWidth: 400, borderRadius: '20px', boxShadow: '0 0 11px rgba(33,33,33,.2)', mb: '20px' }}>
            <CardContent>
              <Typography variant='h4' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><TwitterIcon sx={{ mr: '10px' }} />Twitter</Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', maxWidth: 400, borderRadius: '20px', boxShadow: '0 0 11px rgba(33,33,33,.2)', mb: '20px' }}>
            <CardContent>
              <Typography variant='h4' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><CallIcon sx={{ mr: '10px' }} />+91 9876543210</Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
