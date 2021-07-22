import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: '#3C3C3C',
    fontWeight: 800,
    fontSize: '52px',
    display: 'inline-block',
    height: '120px',
    fontFamily: "'AlibabaPuHuiTi-Heavy'",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 0,
    background: 'transparent',

  },
  imgbg: {
    width: '300px',
    height: '50px',
    background: '#2c2c2c85',
    position: 'relative',
    marginTop: '-25px',
    zIndex: '-1'
  },
  descriptionListIcon: {
    '& .description-list-icon__title': {
      color: 'white!important',
    },
    '& .description-list-icon__subtitle': {
      fontSize: '14px!important',
      lineHeight: '22px!important'
    },
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0,-10px,0)',
      boxShadow: '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important'
    }
  },
}));

const Advantages = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <div className={classes.textWhite}>
            Advantages
            <div className={classes.imgbg}></div>
          </div>
        } 
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 10 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={4}
            md={4}
            data-aos={'fade-up'}
          >
            <DescriptionListIcon
              icon={
                <Avatar className={classes.avatar}>
                  <Image src={item.logo} alt={item.name} />
                </Avatar>
              }
              title={item.name}
              subtitle={item.title}
              className={classes.descriptionListIcon}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;
