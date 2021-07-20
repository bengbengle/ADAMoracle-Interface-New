import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { DescriptionCta } from 'components/molecules';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00000000',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      padding: theme.spacing(2),
    },
    '& .card-product__media': {
      minHeight: 300,
    },
  },
  image: {
    objectFit: 'cover',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px'
  },
  title: {
    fontWeight: 'bold',
    color: '#3C3C3C',
    fontWeight: 800,
    fontSize: '52px',
    display: 'inline-block',
    height: '80px',
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },

  bottomTips: {
    position: 'absolute',
    bottom: '0px',
    padding: '5px',
    paddingLeft: '15px',
    background: '#14141491',
    width: '100%',
    color: '#E96322',
    fontWeight: 500,
    fontSize: '12px'
  },
  bottomtitle: {
    fontWeight: 500,
    fontSize: '18px'
  },
}));

const Team = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  console.log('data::', data, 'props::', props)

  const BlogMediaContent = props => {

    console.log(props)
    const { title, subtitle, description } = props
    return (
      <>
        <Image
          {...props}
          className={classes.image}
          lazyProps={{ width: '100%', height: '100%' }}
        />
        <div className={classes.bottomTips}>
          <div className={classes.bottomtitle}> {title}</div>
          <div className='bottomDesc'>{ subtitle }</div>
        </div>
      </>
    );
  }


  return (
    <div className={className} {...rest}>
      <DescriptionCta
        title="Team"
        align={'center'}
        titleProps={{
          variant: 'h4',
          color: 'textPrimary',
          className: classes.title,
        }}
        primaryCta={
          ''
        }
        className={classes.descriptionCta}
        data-aos="fade-up"
      />
      <Grid container spacing={5}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} key={index} data-aos="fade-up" spacing={10}
            style={{
              backgroundColor: '#00000000'
            }}>
            <CardProduct
              withShadow
              liftUp
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent {...item.cover} title={item.title} subtitle={item.subtitle} alt={item.title} />
              }
              cardContent={
                <ul style={{
                  color: '#999999'
                }}>
                  <li>
                    {
                      item.description
                    }
                  </li>
                </ul>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Team;
