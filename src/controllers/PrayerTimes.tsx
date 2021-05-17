import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PrayerSchedule from '../components/PrayerSchedule'
import { getPrayerTimings } from '../lib/services/Aladhan'
import { getCurrentPrayerTimings } from '../lib/util/Aladhan'

interface ICoordinates {
    latitude: number,
    longitude: number
}

const PrayerTimesPage = styled('div')`
    padding: 10px;
`

function PrayerTimes() {
    const [ date ] = useState(new Date())
    const [ prayerTimesData, setPrayerTimesData ] = useState<any>(null)
    const [ coordinates, setCoordinates ] = useState<ICoordinates|undefined>(undefined)

    useEffect(() => {
        const success = (position: globalThis.GeolocationPosition) => {
            setCoordinates(position.coords)
        }

        const error = (error: globalThis.GeolocationPositionError) => {
            console.warn(`ERROR(${error.code}): ${error.message}`);
        }
        
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])

    useEffect(() => {
        const getPrayerTimesData = async (lat: number, long: number, date: Date) => {
            const res = await getPrayerTimings(lat, long, date)
            const dataForCurrentDate = getCurrentPrayerTimings(res.data)
            setPrayerTimesData(dataForCurrentDate)
        }

        if (coordinates) {
            getPrayerTimesData(coordinates.latitude, coordinates.longitude, date)
        }

    }, [ date, coordinates ])

    return prayerTimesData ? (
        <PrayerTimesPage>
            <h1>Prayer Times</h1>
            <p>Date: {date.toDateString()}</p>
            <PrayerSchedule data={prayerTimesData} />
        </PrayerTimesPage>
    ) : (<div></div>)
}

export default PrayerTimes
