import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
    titleTxt: {
        height: '100px',
        fontSize: '1.6rem',
        fontFamily: "'AlibabaPuHuiTi-Heavy'",
        fontWeight: 800,
        color: 'rgb(255 107 34)',
        marginLeft: '30px',
    },
    times: {
        fontSize: '4.55em',
        width: 'auto',
        fontWeight: 900,
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    
    timesSpan: {
        background: 'url(/assets/timebg.png) no-repeat',
        backgroundSize: 'cover',
        padding: '0px 20px',
        paddingBottom: '10px',
        color: '#ffffff'
    },

    dotspan: {
        background: 'url(/assets/dot.png) center center no-repeat',
        backgroundSize: 'contain',
        padding: '10px',
        color: '#ffffff',
        marginLeft: '10px',
        marginRight: '10px'
    }
}));


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    });

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Index = props => {
    let [txDay, settxDay] = useState(0);
    let [txHour, settxHour] = useState(0);
    let [txMin, settxMin] = useState(0);
    let [txSec, settxSec] = useState(0);

    const { className, ...rest } = props;
    const classes = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });



    const $ = (el) => {
        if (typeof (el) == 'string') {
            return (document.getElementById(el));
        }
        return (el);
    }

    const fillZero = (num, digit) => {
        var str = '' + num;
        if (str.length < digit) {
            str = '0' + str;
        }
        return str;
    }

    const updateTime = () => {

        var oEndDate = new Date(2022, (0 - 1), 1);
        var oNowDate = new Date();

        var iRemain = 0;
        iRemain = parseInt((oEndDate.getTime() - oNowDate.getTime()) / 1000);

        var iDay = parseInt(iRemain / 86400); //剩余天数

        iRemain %= 86400;
        var iHour = parseInt(iRemain / 3600); //剩余小时

        iRemain %= 3600;
        var iMin = parseInt(iRemain / 60); //剩余分钟

        iRemain %= 60;
        var iSec = iRemain; //剩余秒

        console.log('times::', fillZero(iDay, 2) + ':' + fillZero(iHour, 2) + ':' + fillZero(iMin, 2) + ':' + fillZero(iSec, 2))


        settxDay(fillZero(iDay, 2))
        settxHour(fillZero(iHour, 2))
        settxMin(fillZero(iMin, 2))
        settxSec(fillZero(iSec, 2))

        // sTxtDay.innerHTML = fillZero(iDay, 2);
        // sTxtHour.innerHTML = fillZero(iHour, 2);
        // sTxtMin.innerHTML = fillZero(iMin, 2);
        // sTxtSec.innerHTML = fillZero(iSec, 2);
    }

    // timer = setInterval(updateTime, 1000);
    // updateTime()


    useInterval(() => {
        // Your custom logic here
        // setCount(count + 1);
        updateTime()
    }, 1000);
    return (
        <div className={className} {...rest}>
            <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} md={12} data-aos="fade-up">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SectionHeader
                                title={
                                    <span style={{ display: 'inline-flex', flexFlow: 'row' }}>
                                        <div className={classes.titleTxt}>
                                            ADAMOracle Global Node Network 2nd Round Test Coming soon...
                                        </div>
                                    </span>
                                }
                                fadeUp
                                disableGutter
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.times} style={{ fontSize: isMd ? '6.55rem' : '1.55rem' }} >
                                <span className={classes.timesSpan}>{txDay}</span>
                                <span className={classes.dotspan} style={{ backgroundSize: isMd ? 'contain' : '50%' }} ></span>
                                <span className={classes.timesSpan}>{txHour}</span>
                                <span className={classes.dotspan} style={{ backgroundSize: isMd ? 'contain' : '50%' }} ></span>
                                <span className={classes.timesSpan}>{txMin}</span>
                                <span className={classes.dotspan} style={{ backgroundSize: isMd ? 'contain' : '50%' }} ></span>
                                <span className={classes.timesSpan}>{txSec}</span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

Index.propTypes = {
    className: PropTypes.string,
};

export default Index;