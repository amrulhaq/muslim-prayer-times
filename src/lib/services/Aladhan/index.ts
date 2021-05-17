import PrayerTimesCalendar from './PrayerTimesCalendar'

export async function getPrayerTimings(lat: number, long: number, date: Date) {
    const reqUrl = new PrayerTimesCalendar()
        .withLatitude(lat.toString())
        .withLongitude(long.toString())
        .withMethod('2')
        .withMonth(date.getMonth().toString())
        .withYear(date.getFullYear().toString())
        .getUrl()

    const response = await fetch(reqUrl)
        .then(res => res.json())
        
    return response
}