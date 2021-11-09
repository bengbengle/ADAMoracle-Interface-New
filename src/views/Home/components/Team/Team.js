import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Paper } from '@material-ui/core';
import { Image } from 'components/atoms';
import { DescriptionCta } from 'components/molecules';
import { CardProduct } from 'components/organisms';
import Collapse from '@material-ui/core/Collapse';
// import { Button, Typography, Grid, Paper  } from '@material-ui/core';
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
      fontSize: '44px',
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
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px'
  },
  title: {
    fontWeight: 'bold',
    color: '#3C3C3C',
    fontWeight: 800,
    fontSize: '52px',
    display: 'inline-block',
    height: '158px',
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

// Hook
const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

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
          <div className='bottomDesc'>{subtitle}</div>
          <div className='bottomDesc'>
          </div>
        </div> 
      </>
    );
  }

  const BlogGrid = props => {
    const [hoverRef, isHovered] = useHover();

    const { item, index } = props
    return (
      <Grid item xs={12} sm={12} md={3} key={index} data-aos="fade-up" spacing={10} ref={hoverRef}
        style={{
          backgroundColor: '#00000000'
        }}>
        <CardProduct
          withShadow
          liftUp
          className={classes.cardProduct}
          mediaContent={
            <BlogMediaContent {...item.cover} title={item.title} subtitle={item.subtitle} alt={item.title}/>
          }
          cardContent={
            <Collapse in={ isHovered } >
            <span style={{
                color: '#878787'
              }}>
                {
                  item.description
                }
              </span>
            </Collapse>
          }
        />
      </Grid>
    )
  }


  return (
    <div className={className} {...rest}>
      <DescriptionCta
        title={
          <span className={classes.textWhite}>
            Team
          </span>
        }
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
          <BlogGrid item={item} index={index} ></BlogGrid>
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
