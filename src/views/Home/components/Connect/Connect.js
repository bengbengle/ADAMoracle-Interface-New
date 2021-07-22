import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    marginBottom: '100px',
    height: '100px',
    fontSize: '2.7rem',
    fontFamily: "Alibaba PuHuiTi",
    fontWeight: 800,
    color: 'rgb(60, 60, 60)',
    marginLeft: '30px',
    fontFamily: "'AlibabaPuHuiTi-Heavy'",
    color: '#3c3c3c',
    fontSize: '80px',
    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
    },
  },
  avatar: {
    width: 190,
    height: 225,
    borderRadius: 0,
    background: 'transparent',
  },
  descriptionListIcon: {
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '& .description-list-icon__title, & .description-list-icon__subtitle': {
      color: 'white',
    },
    '&:hover': {
      transform: 'translate3d(0,-10px,0)',
      boxShadow: '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important'
    }
  },
  bgbox: {
    // backgroundRepeat: 'no-repeat',
    // background: "url('/assets/shadow.png')",
    // backgroundSize: '100% 84%'

    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '35px',
    backgroundRepeat: 'no-repeat',
    background: "url('/assets/shadow.png')",
    backgroundSize: '100% 100%',

    [theme.breakpoints.up('md')]: {
      padding: '100px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '20px 180px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '20px 180px'
    },
  },
  rightAllow: {
    position: 'absolute',
    top: '50%',
    right: '-10%',
    width: '100px',
    height: '15px'
  },
  mainImg: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px'
  }
}));

const Connect = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  const connect_data  = [
    {
      logo: '/assets/sys-icon1.png',
      name: 'Real World Data/Events',
    },
    {
      logo: '/assets/sys-icon2.png',
      name: 'ADAMoracle Saas System',
   
    },
    {
      logo: '/assets/sys-icon3.png',
      name: 'Wide-area Nodes',
    }
  ];

  return (
    <div className={classes.bgbox} {...rest} data-aos="fade-up">
      <SectionHeader
        title={
          <span className={classes.textWhite}>
            Connect real world data with blockchain system
          </span>
        } 
        data-aos="fade-up"
      />
      <Grid container className={classes.container } data-aos="fade-up">
          <img className={ classes.mainImg } alt="..." src="/assets/ad-bg.png" width="auto" height="auto"></img>
      </Grid>
    </div>
  );
};

Connect.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Connect;
