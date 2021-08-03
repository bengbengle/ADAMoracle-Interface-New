import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  bgbox: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.4)'
  },
  placementGrid: {
    maxWidth: 320,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  videobox: {
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
    },
  },
  coverImage: {
    borderRadius: '20px',

    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  imagestart: {
    width: '100px',
    position: 'absolute',
    height: '100px',
    top: 'calc(50% - 53px)',
    left: 'calc(50% - 50px)',
    zIndex: '1',
    background: '#ffffff00',
    borderRadius: '50%',
    '&:hover': {
      background: '#ffffff',
      cursor: 'pointer'
    }
  },
  titleTxt: {
    width: '321px',
    height: '100px',
    fontSize: '2.5rem',
    fontFamily: "'AlibabaPuHuiTi-Heavy'",
    fontWeight: 800,
    color: 'rgb(112 112 112)',
    marginLeft: '30px',
  }
}));

const What = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span style={{
                    display: 'inline-flex',
                    justifyContent: 'flex-start',
                    flexFlow: 'row'
                  }}>
                    <div style={{
                      width: '27px',
                      height: '102px',
                      background: '#FF6B22'
                    }}></div>
                    <div className={classes.titleTxt }>
                      What is ADAMoracle
                    </div>
                  </span>
                }
                subtitle="ADAMoracle is the first cross-chain decentralized oracle that supports wide-area node quotation. It can provide smart contract developers with comprehensive tools and data, as well as a safer and more convenient oracle product. ADAMoracle will promote the development of rich business formats such as lending, asset synthesis, and prediction markets by connecting real-world data and blockchain systems."
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
          className={classes.videobox}
        >
          <Image
            src="assets/video.png"
            alt="..."
            className={classes.coverImage}
          />
          <Image
            onClick={() => window.open('https://www.youtube.com/watch?v=Vi62u5p3hmU', '_blank') }
            src="assets/start.png"
            alt="..."
            className={classes.imagestart}
          />
          {/* <div className={ classes.bgbox }>

          </div> */}
        </Grid>
      </Grid>
    </div>
  )
}

What.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default What;
