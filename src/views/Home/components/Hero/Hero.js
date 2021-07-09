import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography, ListItem, IconButton, List, SvgIcon, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  image: {
    marginLeft: -20,
    marginTop: -110,
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0,-5px,0)',
      boxShadow: '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: -40,
      marginTop: -150,
      width: '100%',
      marginTop: 0, 
    },
  },
  leftcontainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  centercontainer: {
    marginTop: '40px'
  },
  rightcontainer: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  icons: {
    flexDirection: 'column',
    marginLeft: '10px',
    marginTop: '35px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    }
  },
  socialIcon: {
    width: '34px',
    height: '34px',
    marginTop: '20px',
    backgroundColor: '#ffffff',
    [theme.breakpoints.down('md')]: {
      marginLeft: '30px'
    }
  },

  lefttips: {
    transform: 'rotate(90deg)',
    fontSize: '12px',
    width: '170px',
    letterSpacing: '3px',
    fontWeight: 300,
    marginTop: '75px',
    marginLeft: '-42px',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
 
  container: {
    marginTop: '60px'
  },
  
  mosha: {
    backgroundImage: 'url(/assets/mosha.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    padding: '15px',
    height: '235px',
    width: '441px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  title: {
    width: '400px',
    height: '65px',
    fontSize: '75px',
    fontWeight: 800,
    color: '#FFFFFF',
    textAlign: 'center',
    display: 'inline',
    top: '-32px',
    position: 'absolute',
    left: '25px',
    overflowX: 'visible'
  },
  content: {
    width: '407px',
    height: '87px',
    fontSize: '19px',
    fontWeight: 500,
    color: '#FFFFFF',
    lineHeight: '34px'
  },
  leftd: {
    height:'5px',
    background: 'white',
    marginTop: '10px',
    position: 'absolute',
    width: '17px',
    display: 'block',
    top: '210px',
    borderRadius: '5px',
    left: '40px'
  },
  rightd: {
    height:'5px',
    background: 'white',
    marginTop: '10px',
    position: 'absolute',
    width: '60px',
    display: 'block',
    top: '210px',
    borderRadius: '5px',
    left: '66px'
  },
  buttongroups: {
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'left'
    }
  },
  marginLeft: {
    marginLeft: '5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '25px',
    }
  }
}));


const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })
 
  return (
    <div className={classes.container} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={0} md={1} data-aos={'fade-up'} className={classes.leftcontainer}>
          <div className={classes.lefttips}>
            ADAMoracle 3.0 {' '}
          </div>
          <List>
            <ListItem disableGutters className={classes.icons}>
              <IconButton className={classes.socialIcon}>
                <Avatar alt="Remy Sharp" src="/assets/reddit.png" />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <Avatar alt="Remy Sharp" src="/assets/youtube.png" />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <Avatar alt="Remy Sharp" src="/assets/telegram.png" />
              </IconButton>

              <IconButton className={classes.socialIcon}>
                <Avatar alt="Remy Sharp" src="/assets/kakao.png" />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <Avatar alt="Remy Sharp" src="/assets/discord.png" />
              </IconButton>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={5} data-aos={'fade-up'} className={classes.centercontainer}>
          <div className={classes.mosha }>
            <p className={classes.title} >Oracle 3.0</p>
            <div  className={classes.content} >
              ADAMoracle is the first decentralized oracle <br/> 
              network that supports wide-area node  <br/> 
              quotation
            </div>
            <div>
              <span className={classes.leftd}></span> 
              <span className={classes.rightd}></span> 
            </div>

          </div>
          <div className={classes.rightcontainer}>
            <List>
              <ListItem disableGutters className={classes.icons}>
                <IconButton className={classes.socialIcon}>
                  <Avatar alt="Remy Sharp" src="/assets/reddit.png" />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <Avatar alt="Remy Sharp" src="/assets/youtube.png" />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <Avatar alt="Remy Sharp" src="/assets/telegram.png" />
                </IconButton>

                <IconButton className={classes.socialIcon}>
                  <Avatar alt="Remy Sharp" src="/assets/kakao.png" />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <Avatar alt="Remy Sharp" src="/assets/discord.png" />
                </IconButton>
              </ListItem>
            </List>
          </div>
          <div className={classes.buttongroups} >
            <Button color="primary" variant="contained" size="large">
              Develope with ADAMoracle
            </Button>
            <Button size="large" variant="outlined" color="primary" href="/documentation"  className={ classes.marginLeft } >
              White paper
            </Button>
          </div>
        </Grid>
        
        <Grid
          item
          container
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src='/assets/right-bar.png'
            alt="TheFront Company"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
