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
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
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
    textAlign: 'left',
    
  },
  gridbox: {
    padding: '150px',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Provider = props => {
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
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <>
            <div className={classes.titledot}></div>
            <p className={classes.textWhite}>Become Data Provider</p>
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
            Sell APIs to any smart contract application on the blockchain, and easily monetize data in many fast-growing blockchain industries such as DeFi, insurance, and gaming. Can be compatible with any blockchain, create a universal gateway for your business, and sell data synchronously to all blockchain applications
          </>
        }
        titleProps={{
          className: classes.header
        }}
        subtitleProps={{
          className: classes.subTextClass,
        }}
      />
      <Grid container justify="center">
        {data.map((item, index) => (
          <Grid
            data-aos="fade-up"
            key={index}
            item
            container
            xs={12}
            spacing={isMd ? 4 : 2}
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={6} className={classes.gridbox} container>
              <SectionHeader
                titleVariant="h5"
                title={item.title}
                subtitle={
                  <>
                    {
                      item.description
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
                disableGutter
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={6} style={{
              padding: isMd ? '50px' : '10px' 
            }}>
              <Image src={item.illustration} alt={item.title} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Provider.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Provider;
