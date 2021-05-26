import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as colors from '../../styles/colors'
import * as breakpoints from '../../styles/breakpoints'

interface PrayerClockProps {
    timezone?: string
}

const ClockWrapper = styled('div')`
    display: flex;
    align-items: stretch;
    flex-direction: column;

    @media (min-width: ${breakpoints.md}) {
        align-items: center;
    }
`

const ClockContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.INACTIVE_BACKGROUND};
    border-radius: 5px;
    padding: 2em 2em;

    @media (min-width: ${breakpoints.md}) {
        padding: 2em 4em;
    }
`

const TimeLabel = styled('label')`
    font-size: 2em;
    font-weight: bold;
`

function PrayerClock({ timezone }: PrayerClockProps) {
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])


    return <ClockWrapper>
        <ClockContainer>
            <TimeLabel>{time.toLocaleTimeString(navigator.language, { hour12: false, hour: 'numeric', minute: 'numeric',  } )}</TimeLabel>
            <label>
                {`
                    ${time.toLocaleDateString(navigator.language)}
                    ${timezone ? ', '+timezone : ''}
                `}
            </label>
        </ClockContainer>
    </ClockWrapper>
}

export default PrayerClock