import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
  useScrollTrigger,
  Slide,
  Fab
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    // maxWidth: theme.layout.contentWidth,
    maxWidth: '95%',
    width: '100%',
    margin: '0 auto',
    minHeight: '100px',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: theme.layout.contentWidth,
    }
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 145,
    marginLeft: 'calc(50% - 90px)',
    [theme.breakpoints.up('md')]: {
      width: 145,
      marginLeft: '0px',
    },
  },
  logoTitle: {
    lineHeight: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  slideUpButton: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '50px',
    bottom: '50px'
  }
}));


const HideOnScroll = (props) => {
  const trigger = useScrollTrigger();
  const classes = useStyles();

  console.log(trigger)

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Slide in={!trigger} >
      <div className={classes.slideUpButton}>
        <Fab
          onClick={handleClick} size="small" aria-label="scroll back to top" style={{
            background: 'linear-gradient(0deg, rgb(37 28 24), rgb(193 86 32))'
          }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Slide>
  );
}

const Topbar = ({ themeMode, themeToggler, onSidebarOpen, pages, className, ...rest }) => {
  const classes = useStyles();

  const TransferObj2Arr = (obj) => {
    var arr = []
    for (let o in obj) {
      arr.push(obj[o])
    }
    return arr
  }

  const Navs = TransferObj2Arr(pages)

  const scrollToDataProvider = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#become-data-provider');

    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // computing node
  const scrollToComputingNode = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#become-computing-node');

    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest} id="back-to-top-anchor">
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <div className={classes.logoContainer}>
        <div href="/" title="thefront" className={classes.logoTitle}>
          <Image
            className={classes.logoImage}
            src='/assets/logo.png'
            alt="ADAMoracle"
            lazy={false}
          />
        </div>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          <ListItem className={clsx(classes.listItem)} onClick={scrollToComputingNode}>
            Developer
          </ListItem>
          <ListItem className={clsx(classes.listItem)} onClick={scrollToDataProvider}>
            Solutions
          </ListItem>
          <ListItem className={clsx(classes.listItem)}>
            Pledge
          </ListItem>
          <ListItem className={clsx(classes.listItem)}>
            Ecosystem
          </ListItem>
          <ListItem className={clsx(classes.listItem)}>
            Blog
          </ListItem>

          {/* {
            [...Navs].map((page, i) => (
              <ListItem className={clsx(classes.listItem)}>
                {

                  page.title
                }
              </ListItem>
            ))
          } */}


        </List>
      </Hidden>
      <Hidden smDown>
        <HideOnScroll></HideOnScroll>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
