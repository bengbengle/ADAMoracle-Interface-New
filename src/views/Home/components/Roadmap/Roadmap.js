import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
// import { DescriptionListIcon } from 'components/organisms';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// install Swiper modules
SwiperCore.use([Navigation]);


import ROADMAP from '../../../../assets/images/header-bg.png'
import ROADMAP_M from '../../../../assets/images/header-bg2.png'

import TIMELINE_ARROW_ACTIVE from '../../../../assets/images/icon-arrow-active.png'
import TIMELINE_ARROW from '../../../../assets/images/icon-arrow.png'

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
}));


const StyledRoadmapTimelineItem = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
const StyledRoadmapTimelineLabel = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 173px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #FFFFFF;
  text-align: center;
  transition: all .15s ease-in-out;
  ${StyledRoadmapTimelineItem}:hover & {
    color: #EA5514;
  }
`;
const StyledRoadmapTimelineDividerHoverImg = styled.img`
  position: absolute;
  bottom: 0;
  transform: translateX(-4px) translateY(7px);
  opacity: 0;
  transition: all .15s ease-in-out;
  ${StyledRoadmapTimelineItem}:hover & {
    opacity: 1;
  }
  `;
const StyledRoadmapTimelineDividerImg = styled.img`
  position: absolute;
  bottom: 0;
  transform: translateX(-4px) translateY(7px);
  opacity: 1;
  transition: all .15s ease-in-out;
  ${StyledRoadmapTimelineItem}:hover & {
    opacity: 0;
  }
`;
const StyledRoadmapTimelineDivider = styled.div`
  position: relative;
  flexShrink: 0;
  flexGrow: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(255,255,255,0.5);
  transition: all .15s ease-in-out;
  box-sizing: border-box;
  overflow: visible;
  display: flex;
  justify-content: center;
`;
const StyledRoadmapTimelineDesc = styled.div`
  position: relative;
  flex-shrink: 1;
  flex-grow: 1;
  width: 100%;
  height: 149px;
  padding: 0px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  opacity: 0.6;
  transition: all .15s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${StyledRoadmapTimelineItem}:hover & {
    color: #EA5514;
    &:before {
      background: #EA5514;
    }
  }
`;
const StyledRoadmapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledRoadmap = styled.div`
  width: 100%;
  margin: 0 auto;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 960px) {
    height: auto;
  }
`;

const StyledHomeTitle = styled.p`
  width: 100%;
  text-align: center;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  margin: 0 0 6.25vw 0;
  
  font-size: 2.7rem;
  font-weight: 800;
  color: #3C3C3C;

  @media screen and (max-width: 960px) {
    font-size: 24px;
    margin: 0 0 2vw 0;
  }
`;

const StyledSwiperNavigation = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    font-family: swiper-icons;
    font-size: 18px;
    text-transform: none!important;
    letter-spacing: 0;
    padding: 20px;
    color: black;
    border-radius: 100%;
    background: #575757;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    &:hover {
      background: white;
      cursor: pointer;
    }
`;

const t = (key) => {
  var obj =
  {
    "Timeline-Label-1": "2020 July 1st",
    "Timeline-Label-2": "Aug",

    "Timeline-Label-0": "2022 March",

    "Timeline-Label-3": "2021 Mid-April",
    "Timeline-Label-4": "Late April",

    "Timeline-Label-5": "May",
    "Timeline-Label-6": "June",
    "Timeline-Label-7": "September",
    "Timeline-Label-8": "December",

    "Timeline-Value-1": "ADAMoracle Lab established",
    "Timeline-Value-2": "Officially obtained investment from Collinstar、Consensus Lab、MCS Capital、ZB Labs、BTX Capital",
    

    "Timeline-Value-0": "Start the construction of global distributed data sources",

    "Timeline-Value-3": "ADAMoralce pledge product test version goes online",
    "Timeline-Value-4": "ADAMoralce pledge product officially launched",

    "Timeline-Value-5": "Beta version of ADAMoracle is online",
    "Timeline-Value-6": "ADAMoracle official version is launched",

    "Timeline-Value-7": "Start the wide-area node computing platform",
    "Timeline-Value-8": "The community DAO governance platform will be online",
  }
  return obj[key]
}

const RoadmapItem = (props) => (
  <StyledRoadmapTimelineItem>
    <StyledRoadmapTimelineLabel>
      <img
        width='60px'
        className={'image'}
        alt={'alt'}
        src={'/assets/roadmap/'+  props.idx + '.png'}
      />
    </StyledRoadmapTimelineLabel>
    <StyledRoadmapTimelineDivider>
      <StyledRoadmapTimelineDividerHoverImg src={TIMELINE_ARROW_ACTIVE} alt='timeline_arrow' />
      <StyledRoadmapTimelineDividerImg src={TIMELINE_ARROW} alt='timeline_arrow_unselected' />
    </StyledRoadmapTimelineDivider>
    
    <StyledRoadmapTimelineDesc>
      <p style={{color: '#F55C21', fontWeight: '800', fontFamily: 'Alibaba PuHuiTi', textAlign: 'center', fontSize: '24px'}}>
        {props.time}
      </p>
      <p style={{marginTop: '10px', textAlign: 'center', height: '90px' }}>
      {props.desc}
      </p>
    </StyledRoadmapTimelineDesc>
  </StyledRoadmapTimelineItem>
);

const Roadmap = props => {
  const { data, className, ...rest } = props;

  const [swiperInstance, setSwiperInstance] = useState(null);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isXm = useMediaQuery(theme.breakpoints.up('xm'), {
    defaultMatches: true,
  });

  const handlePrevSwiper = (e) => swiperInstance.navigation.onPrevClick(e);
  const handleNextSwiper = (e) => swiperInstance.navigation.onNextClick(e);

  const swiperPreview = () => {
    const theme = useTheme();
    let num = isLg ?
      4 : isMd ?
        4 : isSm ?
          1 : isXm ? 1 : 1;

    console.log('theme.breakpoints.up("md")::', theme.breakpoints.up('md'))

    return num;
  }
  const num = swiperPreview()

  console.log('num::', num)

  const classes = useStyles();



  return (
    <div {...rest}>
      <StyledRoadmap id="roadmap">
        <StyledHomeTitle>
          <span className={classes.textWhite}>
            Roadmap
          </span>
        </StyledHomeTitle>

        <StyledRoadmapContainer>
          <StyledSwiperNavigation onClick={handlePrevSwiper}>
            prev
          </StyledSwiperNavigation>
          <Swiper
            spaceBetween={0}
            slidesPerView={swiperPreview()}
            onSwiper={setSwiperInstance}
          >
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-1')} desc={t('Timeline-Value-1')} idx='1' />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-2')} desc={t('Timeline-Value-2')} idx='2' />
            </SwiperSlide>
            
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-3')} desc={t('Timeline-Value-3')} idx='3'/>
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-4')} desc={t('Timeline-Value-4')} idx='4'  />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-5')} desc={t('Timeline-Value-5')} idx='5'/>
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-6')} desc={t('Timeline-Value-6')} idx='6' />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-7')} desc={t('Timeline-Value-7')} idx='7' />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-8')} desc={t('Timeline-Value-8')} idx='8' />
            </SwiperSlide>

            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-0')} desc={t('Timeline-Value-0')} idx='9'  />
            </SwiperSlide>
          </Swiper>
          <StyledSwiperNavigation onClick={handleNextSwiper}>
            next
          </StyledSwiperNavigation>
        </StyledRoadmapContainer>
      </StyledRoadmap>
    </div>
  );
};

Roadmap.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  //   data: PropTypes.array.isRequired,
};

export default Roadmap;