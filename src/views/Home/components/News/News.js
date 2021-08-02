import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Paper  } from '@material-ui/core';
import { Image } from 'components/atoms';
import { DescriptionCta } from 'components/molecules';
import { CardProduct } from 'components/organisms';
import { pink } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    marginBottom: '100px',
    height: '100px',
    fontSize: '2.5rem',
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
    borderRadius: '45px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  blogTitle: {
    fontWeight: 700,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0),
  },
  author: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontWeight: 'bold',
    color: '#3C3C3C',
    fontWeight: 800,
    fontSize: '52px',
    display: 'inline-block',
    height: '90px',
  },
  subTitle: {
    height: '80px',
    fontSize: '12px!important',
    fontWeight: '500',
    color: '#F55C21!important'
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  imgContent: {
    '&:hover': {
      cursor: 'pointer'
    },
  }
}));

const News = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => {
    return (
      <div >
         {/* <Collapse in={true}>
          <Paper elevation={4} className={'classes.paper'}>
            {props.title}
          </Paper>
        </Collapse> */}

        <Typography
          variant="h6"
          color="textPrimary"
          className={classes.blogTitle}
          align="center"
        >
          {props.title}
        </Typography>
      </div>
    );
  }


  const redirectTo = (url) => {
    window.open(url, '_blank')
  }
  return (
    <div className={className} {...rest}>
      <DescriptionCta
        title={
          <span className={classes.textWhite}>
            ADAMoracle News
          </span>
        }
        align={'center'}
        titleProps={{
          variant: 'h4',
          color: 'textPrimary',
          className: classes.title,
        }}
        className={classes.descriptionCta}
        data-aos="fade-up"
        subtitle="The Latest ADAMoracle News"
        subtitleProps={{
          className: classes.subTitle
        }}
      />
      <Grid container spacing={5}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} key={index} data-aos="fade-up" style={{
            backgroundColor: '#00000000'
          }}>
            <CardProduct
              
              withShadow
              liftUp
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} onClick= {() => redirectTo(item.url)} 
                className={classes.imgContent} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  date={item.date}
                  tags={item.tags}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

News.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default News;
