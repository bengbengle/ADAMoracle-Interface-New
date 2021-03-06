import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  Avatar
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    position: 'absolute',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
  bgshape: {
    right: '150px',
    width: '300px',
    height: '300px',
    zIndex: 0,
    position: 'absolute',
    clipPath: 'circle(50% at right)',
    background: 'linear-gradient(87deg, #a4a4a414, rgb(77 77 77 / 27%))',
    borderRadius: '50%',
    transform: 'rotateZ(300deg)',
    top: '0px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  bgshape1: {
    width: '200px',
    height: '200px',
    position: 'absolute',
    clipPath: 'circle(50% at right)',
    background: 'linear-gradient(90deg, #a4a4a414, rgb(77 77 77 / 44%))',
    zIndex: '1',
    right: '0px',
    transform: 'rotateZ(90deg)',
    bottom: '0px',
    left: '0px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  bgshape2: {
    width: '200px',
    height: '200px',
    position: 'absolute',
    clipPath: 'circle(50% at right)',
    background: 'linear-gradient(90deg, #a4a4a414, rgb(77 77 77 / 44%))',
    zIndex: '1',
    left: '20%',
    top: '0px',
    transform: 'rotateZ(-90deg)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();
 

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className={classes.menuListContainer}>
            {/* <div style={{
              position: 'absolute'
            }}> */}
            <div className={classes.bgshape}></div>
            <div className={classes.bgshape1}></div>
            <div className={classes.bgshape2}></div>
            {/* </div> */}
            <div style={{ padding: '20px' }}>
              <p>Developer</p>
              <ul className='bottomList'>
                <li>Doc</li>
                <li>Developer resouces</li>
                <li>Quotation</li>
              </ul>
              <p>Ecosystem</p>
              <ul className='bottomList'>
                <li>View Dapp List</li>
                <li>Ecological Governance Manual</li>
                <li onClick={e => window.open('https://forms.gle/iCFs7CYCjBwCerkE9', '_blank')} >
                    Help Center
                </li>
                <li onClick={e => window.open('https://forms.gle/iCFs7CYCjBwCerkE9', '_blank')} >Feedback Center</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <List disablePadding>
              {/* <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem> */}
              {/* <List> */}
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
              </ListItem>
            {/* </List> */}
            </List>
          </Grid>
          
        </Grid>

      </div>
     
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
