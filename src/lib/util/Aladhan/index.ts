function getHourFromTimeString(time: string) {
    return parseInt(time.split(':')[0])
}

function getMinuteFromTimeString(time: string) {
    return parseInt(time.split(':')[1])
}

export function getDateFromTiming(timing: string) {
    const time = getTimeFromTiming(timing)
    const timeDate = new Date()
    timeDate.setHours(getHourFromTimeString(time), getMinuteFromTimeString(time), 0, 0)
    return timeDate
}

export function getCurrentPrayerTimings(responseData: Array<any>) {
    return responseData.find(data => {
        return data.date.gregorian.day.toString() === new Date().getDate().toString()
    })
}

export function getTimeFromTiming(timing: string) {
    return timing.split(' ')[0]
}

export function getTimezoneFromTiming(timing: string) {
    return timing.split(' ')[1]
}

export function isCurrentTimingActive(timing: string, nextTiming?: string) {
    const currentDate = new Date()
    const timingDate = getDateFromTiming(timing)
    if (!nextTiming) {
        return currentDate > timingDate
    }
    const nextTimingDate =  getDateFromTiming(nextTiming)
    return currentDate > timingDate && currentDate < nextTimingDate
}
