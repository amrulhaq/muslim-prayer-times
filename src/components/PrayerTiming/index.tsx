import React from 'react'
import styled from 'styled-components'
import * as colors from '../../styles/colors'
import { getTimeFromTiming, getTimezoneFromTiming } from '../../lib/util/Aladhan'

interface PrayerTimesProps {
    label: string
    timing: string
    isTimingActive: boolean
}

interface ITimingsProps {
    isActive?: boolean
}

const TimingWrapper = styled('div')<ITimingsProps>`
    background-color: ${props => props.isActive ? colors.ACTIVE_BACKGROUND : colors.INACTIVE_BACKGROUND};
    margin: 10px;
    padding: 15px 5px 15px 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 5px;
    min-width: 50px;
`
const TimingLabel = styled(`label`)<ITimingsProps>`
    margin-bottom: 5px;
    font-size: 0.75em;
    color: ${props => props.isActive ? colors.ACTIVE_TEXT : colors.INACTIVE_TEXT};
`
const TimeText = styled(`label`)<ITimingsProps>`
    margin-bottom: 5px;
    font-size: 1em;
    color: ${props => props.isActive ? colors.ACTIVE_TEXT : colors.INACTIVE_TEXT};
`

const TimezoneText = styled(`label`)<ITimingsProps>`
    font-size: 0.75em;
    color: ${props => props.isActive ? colors.ACTIVE_TEXT : colors.INACTIVE_TEXT};
`

const PrayerTiming = React.forwardRef<HTMLDivElement, PrayerTimesProps>(({label, timing, isTimingActive}, ref) =>  {
    const time = getTimeFromTiming(timing)
    const timeZone = getTimezoneFromTiming(timing)
    return (
        <TimingWrapper isActive={isTimingActive} ref={ref} >
            <TimingLabel isActive={isTimingActive}>{label}</TimingLabel>
            <TimeText isActive={isTimingActive}>{time}</TimeText>
            <TimezoneText isActive={isTimingActive}>{timeZone}</TimezoneText>
        </TimingWrapper>
    )
})

export default PrayerTiming