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
  

}));


const StyledRoadmapTimelineItem = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
const StyledRoadmapTimelineLabel = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 149px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #FFFFFF;
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
  padding: 20px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  opacity: 0.6;
  transition: all .15s ease-in-out;
  display: flex;
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
    background: white;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
`;

const t = (key) => {
  var obj =
  {
    "Timeline-Label-1": "2020/7/1",
    "Timeline-Label-2": "2020/8/1",
    "Timeline-Label-3": "Mid-April 2021",
    "Timeline-Label-4": "Late April-Early May 2021",
    "Timeline-Label-5": "Mid-May 2021",
    "Timeline-Label-6": "2021/6",
    "Timeline-Label-7": "2021/7",
    "Timeline-Label-8": "2021/8",
    "Timeline-Value-1": "ADAMoracle laboratory was established",
    "Timeline-Value-2": "Obtain strategic investment from Collinstar/Redline Capital/ZB Labs/MCS CAPITAL /YottaFund/BTX Capital",
    "Timeline-Value-3": "ADAMracle Beta version is online",
    "Timeline-Value-4": "Launch on test net",
    "Timeline-Value-5": "Voting system online",
    "Timeline-Value-6": "Node election mechanism online",
    "Timeline-Value-7": "Community governance online",
    "Timeline-Value-8": "Launch global data sources ecological construction",
  }
  return obj[key]
}

const RoadmapItem = (props) => (
  <StyledRoadmapTimelineItem>
    <StyledRoadmapTimelineLabel>
      {props.time}
    </StyledRoadmapTimelineLabel>
    <StyledRoadmapTimelineDivider>
      <StyledRoadmapTimelineDividerHoverImg src={TIMELINE_ARROW_ACTIVE} alt='timeline_arrow' />
      <StyledRoadmapTimelineDividerImg src={TIMELINE_ARROW} alt='timeline_arrow_unselected' />
    </StyledRoadmapTimelineDivider>
    <StyledRoadmapTimelineDesc>
      {props.desc}
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


  return (
    <div {...rest}> 
      <StyledRoadmap id="roadmap">
        <StyledHomeTitle>
          <span>Roadmap</span>
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
              <RoadmapItem time={t('Timeline-Label-1')} desc={t('Timeline-Value-1')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-2')} desc={t('Timeline-Value-2')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-3')} desc={t('Timeline-Value-3')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-4')} desc={t('Timeline-Value-4')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-5')} desc={t('Timeline-Value-5')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-6')} desc={t('Timeline-Value-6')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-7')} desc={t('Timeline-Value-7')} />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapItem time={t('Timeline-Label-8')} desc={t('Timeline-Value-8')} />
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