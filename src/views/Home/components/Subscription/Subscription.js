import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  cardBase: {
    background: '#F55C21!important',
    width: '100%',
    borderRadius: '32px',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white',
    fontSize: '32px',
    fontWeight: '800'
  },
  bg1: {
    width: '50px',
    height: '90px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(245, 92, 33, 0))',
    borderRadius: '3px',
    position: 'absolute',
    transform: 'rotate(45deg)',
    left: '10px',
    bottom: '-10px',
  },
  bg2: {
    width: '50px',
    height: '90px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(245, 92, 33, 0))',
    borderRadius: '3px',
    position: 'absolute',
    transform: 'rotate(45deg)',
    right: '10px',
    top: '10px',
  },
  bg3: {
    width: '50px',
    height: '90px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(245, 92, 33, 0))',
    borderRadius: '3px',
    position: 'absolute',
    transform: 'rotate(45deg)',
    left: '25%',
    top: '-10px',
  },
  bg4: {
    width: '50px',
    height: '90px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(245, 92, 33, 0))',
    borderRadius: '3px',
    position: 'absolute',
    transform: 'rotate(45deg)',
    right: '25%',
    bottom: '-10px',
  },
  SubButton: {
    padding: '20px',
    height: '42px'
  }
}));

const Subscription = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [isSub, setIsSub] = React.useState(false);

  const subscribe = () => {
    setIsSub(true)
  }
  console.log('isSub::', isSub)
  return (
    <div className={className} {...rest}>
      <CardBase
        variant="outlined"
        liftUp
        data-aos="fade-up"
        className={classes.cardBase}
      >
        {
          isSub ? 'You Has Subscribed' :
          <>
            <Grid item xs={12} md={12} style={{ zIndex: '1' }}>
              <SectionHeader
                title={
                  <span className={classes.textWhite}>
                    The latest ADAMoracle news
                  </span>
                }
                fadeUp
                align="center"
              />
              <Grid container spacing={2} alignItems="center" style={{background: 'white',borderRadius: '29px'}}>
                    <Grid item xs={9} sm={9} >
                      <TextField
                          style={{
                              backgroundColor: '#00000000'
                          }}
                        type="search"
                        size="small"
                        fullWidth
                        label="Please enter your E-Mail address"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <Button 
                          className={classes.SubButton}
                          fullWidth
                          variant="contained"
                          color="primary"
                          size="large"
                          onClick={subscribe}
                        >
                        Subscribe
                      </Button>
                    </Grid>
                  </Grid>
              
            </Grid>
            <div className={classes.bg1}></div>
            <div className={classes.bg2}></div>
            <div className={classes.bg3}></div>
            <div className={classes.bg4}></div>
          </>
        }
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
