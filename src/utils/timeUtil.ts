export function getChatbubbleTime(timestampStr: string, hourSeparator: string = ":"): string {
    var chatDateTime = new Date(timestampStr)
    var currentDateTime = new Date()

    if (chatDateTime.getDate() == currentDateTime.getDate()) {
        return getFullTime(chatDateTime, hourSeparator)
    }
    return  getFullDate(chatDateTime) +" "+ getFullTime(chatDateTime, hourSeparator)
}

function numToStr(num: number): string{
    if (num < 10){
        return "0"+num
    }
    return num+""
}

function getFullDate(dateTime: Date): string{
    return numToStr(dateTime.getDate()) + " " + monthNumberToName(dateTime.getMonth()) + " " + dateTime.getFullYear()
}

function getFullTime(dateTime: Date, separator: string): string{
    return numToStr(dateTime.getHours()) + separator + numToStr(dateTime.getMinutes())
}

function monthNumberToName(monthNumber: number): string {
    switch (monthNumber) {
        case 1:
            return "Januari"
        case 2:
            return "Februari"
        case 3:
            return "Maret"
        case 4:
            return "April"
        case 5:
            return "Mei"
        case 6:
            return "Juni"
        case 7:
            return "Juli"
        case 8:
            return "Agustus"
        case 9:
            return "September"
        case 10:
            return "Oktober"
        case 11:
            return "November"
        case 12:
            return "Desember"
        default:
            return ""
    }
}