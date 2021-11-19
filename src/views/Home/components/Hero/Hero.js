import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography, ListItem, IconButton, List, SvgIcon, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 'initial'
  },
  image: {
    marginLeft: '10%',
    marginTop: '-10%',
    width: '73%',
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0,-5px,0)',
      boxShadow: '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important',
    },
    [theme.breakpoints.up(1280) && theme.breakpoints.down(1550) ]: {
      marginLeft: '20%'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: -40,
      width: '100%',
      marginTop: 50, 
    },
  },
  leftcontainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  centercontainer: {
    marginTop: '40px',
    zIndex: '1',
    paddingLeft: '60px!important',
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
      paddingLeft: '10px!important',
    }
  },
  rightcontainer: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  rightImgcontainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
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
    marginLeft: '-1.2rem',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
 
  container: {
    marginTop: '60px'
  },
  
  mosha: { 
    padding: '15px',
    height: '18vw',
    width: '35vw',
    minHeight: '306px',
    minWidth: '580px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    backgroundSize: '100% 100%',
    backgroundImage: 'url(/assets/mosha.png)',
    backgroundRepeat: 'no-repeat',
    height: '60%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      minWidth: 'auto',
      minHeight: 'auto',
      width: '100%'
    }
  },
  title: {
    top: '-2rem',
    paddingLeft: '10%',
    color: '#FFFFFF',
    height: '5rem',
    display: 'inline',
    position: 'absolute',
    fontSize: '80px',
    overflowX: 'visible',
    textAlign: 'left',
    fontWeight: '800',
    width: '35vw',
    [theme.breakpoints.down('md')]: {
      top: '-2rem',
      'font-size': '60px',
      overflowX: 'visible',
      fontWeight: '800',
      width: '100%',
      textAlign: 'left',
      paddingLeft: '10%',
    }
  },
  content: {
    width: '407px',
    height: '87px',
    fontSize: '19px',
    fontWeight: 500,
    color: '#FFFFFF',
    lineHeight: '34px',
    width: '90%',
    fontSize: '1.5rem',
    fontWeight: '500',
    lineHeight: '2.7rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '1.7rem',
    }
  },
  contentdot: {
    display: 'flex',
    marginTop: '10px'
  },
  leftd: {
    height:'5px',
    background: 'white',
    marginTop: '10px',
    width: '17px',
    display: 'block',
    top: '210px',
    borderRadius: '5px',
    left: '40px',
    marginRight: '10px'
  },
  rightd: {
    height:'5px',
    background: 'white',
    marginTop: '10px',
    width: '60px',
    display: 'block',
    top: '210px',
    borderRadius: '5px',
    left: '66px'
  },
  buttongroups: {
    marginTop: '50px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'left'
    }
  },
  marginLeft: {
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '25px',
    }
  },
  
}));


const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })
 
  const scrollToComputingNode = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#become-computing-node');

    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const navigatorTo = (url) => {
    console.log(url)
    window.open(url, '_blank ')
  }

  return (
    <div className={classes.container} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={0} md={1} data-aos={'fade-up'} className={classes.leftcontainer}>
          <div className={clsx(classes.lefttips, 'AlibabaPuHuiTi-Bold')}>
            ADAMoracle 3.0 {' '}
          </div>
          <List>
            <ListItem disableGutters className={classes.icons}>
              <IconButton className={classes.socialIcon} href='https://twitter.com/ADAM_Oracle' target='_blank'>
                <Avatar alt="Remy Sharp" src="/assets/twitter.png" />
              </IconButton>
              <IconButton className={classes.socialIcon} href='https://www.youtube.com/channel/UCwAf3rsQIml0X0CdYbEcfMw' target='_blank'>
                <Avatar alt="Remy Sharp" src="/assets/youtube.png" />
              </IconButton>
              <IconButton className={classes.socialIcon} href='https://t.me/adamoracleEnglish' target='_blank'>
                <Avatar alt="Remy Sharp" src="/assets/telegram.png" />
              </IconButton>
              <IconButton className={classes.socialIcon} href='https://github.com/smartcontractadam' target='_blank'>
                <Avatar alt="Remy Sharp" src="/assets/github.png" />
              </IconButton>
              <IconButton className={classes.socialIcon} href='https://adamoracle.medium.com' target='_blank'>
                <Avatar alt="Medium" src="/assets/medium.png" />
              </IconButton>
              <IconButton className={classes.socialIcon} href='https://discord.gg/gWgaysNZPq' target='_blank'>
                <Avatar alt="Medium" src="/assets/discord.png" />
              </IconButton>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={5} data-aos={'fade-up'} className={classes.centercontainer}>
          <div className={classes.mosha }>
            <p className={clsx(classes.title, 'AlibabaPuHuiTi-Heavy')} >Oracle 3.0</p>
            <div  className={classes.content} >
              <p>
              ADAMoracle is the first decentralized oracle
              network that supports wide-area node  
              quotation
              </p>
              <div className={classes.contentdot}>
              <span className={classes.leftd}></span> 
              <span className={classes.rightd}></span> 
            </div>
            </div>
            
          </div>
          <div className={classes.rightcontainer}>
            <List>
              <ListItem disableGutters className={classes.icons}>
                <IconButton className={classes.socialIcon} href='https://twitter.com/ADAM_Oracle' target='_blank'>
                  <Avatar alt="Remy Sharp" src="/assets/twitter.png" />
                </IconButton>
                <IconButton className={classes.socialIcon} href='https://www.youtube.com/channel/UCwAf3rsQIml0X0CdYbEcfMw' target='_blank'>
                  <Avatar alt="Remy Sharp" src="/assets/youtube.png" />
                </IconButton>
                <IconButton className={classes.socialIcon} href='https://t.me/adamoracleEnglish' target='_blank'>
                  <Avatar alt="Remy Sharp" src="/assets/telegram.png" />
                </IconButton>
                <IconButton className={classes.socialIcon} href='https://github.com/smartcontractadam' target='_blank'>
                  <Avatar alt="Remy Sharp" src="/assets/github.png" />
                </IconButton>
                <IconButton className={classes.socialIcon} href='https://adamoracle.medium.com' target='_blank'>
                  <Avatar alt="Medium" src="/assets/medium.png" />
                </IconButton>
                <IconButton className={classes.socialIcon} href='https://discord.gg/gWgaysNZPq' target='_blank'>
                  <Avatar alt="Discord" src="/assets/discord.png" />
                </IconButton>
              </ListItem>
            </List>
          </div>
          <div className={classes.buttongroups} >
            <Button color="primary" variant="contained" size="large" onClick={ scrollToComputingNode }>
              Develope with ADAMoracle
            </Button>
            <Button size="large" variant="outlined" color="primary"  className={ classes.marginLeft } onClick={
              () => window.open('/assets/files/adamoracle_whitepaper.pdf?t='+ new Date(), '_blank')
            }>
              White paper
            </Button>
          </div>
        </Grid>
        
        <Grid
        className={classes.rightImgcontainer}
          item
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <img className={classes.image}
            alt="TheFront Company" src="/assets/right-bar3.png" width="auto" height="auto">
          </img>
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
