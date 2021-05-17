const PRAYER_TIMES_CALENDAR = 'http://api.aladhan.com/v1/calendar'

class PrayerTimesCalendar {
    private requestUrl: string

    constructor() {
        this.requestUrl = PRAYER_TIMES_CALENDAR
    }

    getUrl() {
        return this.requestUrl
    }

    private hasParam() {
        return this.requestUrl.match(/\?./)
    }

    private addParam(key: string, value: string) {
        this.requestUrl = `${this.requestUrl}${this.hasParam() ? '&' : '?'}${key}=${value}`
    }

    withLatitude(lat: string) {
        this.addParam('latitude', lat)
        return this
    }

    withLongitude(long: string) {
        this.addParam('longitude', long)
        return this
    }

    withMethod(method: string) {
        this.addParam('method', method)
        return this
    }

    withMonth(month: string) {
        this.addParam('month', month)
        return this
    }

    withYear(year: string) {
        this.addParam('year', year)
        return this
    }
}

export default PrayerTimesCalendar