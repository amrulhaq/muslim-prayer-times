import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import PrayerTiming from '../PrayerTiming'
import { isCurrentTimingActive, getDateFromTiming } from '../../lib/util/Aladhan'

interface PrayerScheduleProps {
    data: any
}

const PrayerScheduleList = styled('div')`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
`
function PrayerSchedule({data}: PrayerScheduleProps) {

    const refElement = useRef<null | HTMLDivElement>(null)
    
    const timingComparator = (key: string, nextKey: string) => {
        const currentTimingDate =  getDateFromTiming(data.timings[key])
        const nextTimingDate = getDateFromTiming(data.timings[nextKey])

        if (currentTimingDate < nextTimingDate) {
            return -1
        } else if (currentTimingDate > nextTimingDate) {
            return 1
        }

        return 0
    }

    useEffect(() => {
        const executeScroll = () => {
            refElement.current?.scrollIntoView({ behavior: 'smooth', inline: 'center' })
        }
        executeScroll()
    }, [])

    return (
        <PrayerScheduleList>
            { Object.keys(data.timings).sort(timingComparator).map(
                (key, index, keys) => {
                    const currentTiming = data.timings[key]
                    const nextKey = keys[index+1]
                    const nextTiming = data.timings[nextKey]
                    const isActive = isCurrentTimingActive(currentTiming, nextTiming)
                    return ( <PrayerTiming
                        label={key}
                        timing={currentTiming}
                        isTimingActive={isActive}
                        ref={isActive ? refElement : undefined}
                    /> )
                }
            ) }
        </PrayerScheduleList>
    )
}

export default PrayerSchedule