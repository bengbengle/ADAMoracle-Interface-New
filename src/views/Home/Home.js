import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section } from 'components/organisms';
import {
  Hero,
  What,
  Connect,
  Subscription,
  Advantages,
  Provider,
  Computing,
  News,
  Team,
  Roadmap,
  Comingsoon
} from './components';

import {
  connect_data,
  advantages_data,
  provider_data,
  computing_data,
  news_data,
  team_data
} from './data';


const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    maxWidth: 'initial',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '100%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  connect: {
    width: '100%',
    display: 'flex',
    background: 'url(/assets/shadow.png)',
    alignItems: 'center',
    backgroundSize: '100% 100%',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0',
    maxWidth: '100%',
    padding: '74px calc(50% - 600px)'
  },
  computing_bg: {
    '&::before': {
      right: '500px',
      width: '300px',
      height: '300px',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      content: '',
      position: 'absolute',
      background: 'linear-gradient(356deg, #cfcfcf26, #7d7d7d00)',
      left: '-15px',
      top: '-15px',
      clipPath: 'circle(157px at bottom)',
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  
  const redirectToAdambox = event => {
    // window.open("http://testnet.mine.adambox.io/");
  }

  return (
    <div>
      <div className='noticebar' onClick={redirectToAdambox}>
        <div className='noticeicon'>
        </div>
        ADAMoracle wide-area node network beta testing round 2 is upcoming, learn more about the"STARCRAFT" event
      </div>

      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>

      <Section style={{ paddingBottom: '0px' }}>
        <Comingsoon />
      </Section>

      <Section>
        <What />
      </Section>

      <Section className={classes.connect}>
        <Connect />
      </Section>

      <Section>
        <Advantages data={advantages_data} />
      </Section>
      
      <Section>
        <Provider data={provider_data} />
      </Section>

      <Section className={classes.computing_bg}>
        <Computing data={computing_data} />
      </Section>

      <Section>
        <Roadmap data={team_data} />
      </Section>

      <Section>
        <Team data={team_data} />
      </Section>

      <Section>
        <News data={news_data} />
      </Section>

      <Section>
        <Subscription />
      </Section>

    </div>
  );
};

export default Home;
