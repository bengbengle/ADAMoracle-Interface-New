import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { } from '@material-ui/core';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
// import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  listGrid: {
    overflow: 'hidden',
    padding: '60px',
    background: 'rgba(0, 0, 0, 0)',
    borderRadius: '19px',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    }
  },
  textWhite: {
    color: 'white',
    fontSize: '46px',
    fontWeight: '800',
    color: '#FF6B22',
    marginLeft: '40px',
    inlineHeight: '43px',
    whiteSpace: 'nowrap',
    fontFamily: "'AlibabaPuHuiTi-Heavy'",
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      fontSize: '32px',
      marginLeft: '10px',
    }
  },
  titledot: {
    width: '27px',
    height: '43px',
    background: '#FF6B22'
  },
  headerAllow: {
    height: '43px',
    width: '43px',
    marginLeft: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    }
  },
  header: {
    height: '43px',
    display: 'flex',
    alignItems: 'center'
  },
  subTextClass: {
    textAlign: 'left'
  },
  bgshape: {
    top: '0px',
    width: '281px',
    height: '281px',
    background: 'linear-gradient(90deg, #3C3C3C, rgba(60, 60, 60, 0))',
    left: '-400px',
    position: 'absolute',
    transform: 'rotate(269deg)',
    borderBottomRightRadius: '100%',
    borderBottomLeftRadius: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  bgshape1: {
    top: '200px',
    right: '-20px',
    width: '200px',
    height: '200px',
    position: 'absolute',
    background: 'linear-gradient(90deg, #3C3C3C, rgba(60, 60, 60, 0))',
    clipPath: 'circle(50% at right)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    // [theme.breakpoints.down('lg')]: {
    //   display: 'none',
    // }
  }
}));

const Computing = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
 
  const image1 = {
    src: '/assets/arrow.png',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x',
    alt: '...',
  }

  return (
    <div className={className} data-aos="fade-up" {...rest} id='become-computing-node'>
      <SectionHeader
        title={
          <>
            <div className={classes.titledot}></div>
            <p className={classes.textWhite} id="developer">
              Become Computing Node
            </p>
            <Image
              src={image1.src}
              srcSet={image1.srcset}
              alt={image1.alt}
              className={ classes.headerAllow }
            />
          </>
        }
        subtitle={
          <>
            The ADAMoracle created a grand node service network, which can accommodate thousands of service providers for data verification and quotation services at the same time, which not only ensures the accuracy and credibility of the data, but also improves the anti-attack of the oracle itself. Lower the barriers to participation of nodes
          </>
        }
        titleProps={{
          className: classes.header
        }}
        subtitleProps={{
          className: classes.subTextClass,
        }}
      />
      <Grid container spacing={isMd ? 10 : 0} justify="center">
        <Grid item xs={12} sm={12} md={6} container  
          className={classes.listGrid}
        >
            <SectionHeader
                titleVariant="h5"
                title={
                  <>
                    <div className='titleDot'></div>
                    Low Barriers To Participation
                  </>
                }
                subtitle={
                  <>
                    {
                      'Any enterprise or individual that has certain server equipment, has certain technical operation and maintenance capabilities, and able to start nodes to complete Docker images, can join the ADAMoracle ecosystem'
                    }
                  </>
                }
                ctaGroup={[
                  <div className={ '' } style={{
                    width: '13px',
                    height: '5px',
                    background: '#4B4B4B',
                    borderRadius: '2px'
                  }}></div>,
                  <div style={{
                    width: '58px',
                    height: '5px',
                    background: '#4B4B4B',
                    borderRadius: '2px'
                  }}></div>
                ]}
                titleProps={{
                  className: classes.header
                }}
                subtitleProps={{
                  className: classes.subTextClass,
                }}
                align="left"
                className='sectionBox'
              />
        </Grid>
        <Grid item xs={12} sm={12} md={6} container
          className={classes.listGrid}
        >
            <SectionHeader
                titleVariant="h5"
                title={
                  <>
                    <div className='titleDot'></div>
                    Sharing the profits of ecological construction
                  </>
                }
                subtitle={
                  <>
                    {
                      'Any enterprise or individual that has certain server equipment, has certain technical operation and maintenance capabilities, and able to start nodes to complete Docker images, can join the ADAMoracle ecosystem'
                    }
                  </>
                }
                ctaGroup={[
                  <div className={ '' } style={{
                    width: '13px',
                    height: '5px',
                    background: '#4B4B4B',
                    borderRadius: '2px'
                  }}></div>,
                 
                  <div style={{
                    width: '58px',
                    height: '5px',
                    background: '#4B4B4B',
                    borderRadius: '2px'
                  }}></div>
                ]}
                titleProps={{
                  className: classes.header
                }}
                subtitleProps={{
                  className: classes.subTextClass,
                }}
                align="left"
                className='sectionBox'
              />
        </Grid>
      </Grid>
    
      <div className={classes.bgshape}></div>
      <div className={classes.bgshape1}></div>
              
    </div>
  );
};

Computing.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Computing;
