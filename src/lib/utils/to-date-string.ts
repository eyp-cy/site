export type SingleDate = [Date]

export type DateRange = [Date, Date]

function padDateNumber(num: number) {
  return num < 10 ? '0' + num.toString() : num.toString()
}

function getDate(date: Date) {
  const yyyy = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const dd = padDateNumber(day)
  const mm = padDateNumber(month)

  return `${dd}/${mm}/${yyyy}`
}

export function toDateString(eventDate: SingleDate | DateRange) {
  if (eventDate.length === 1) {
    return getDate(eventDate[0])
  } else {
    const startDay = padDateNumber(eventDate[0].getDate())
    const endDate = getDate(eventDate[1])
    return `${startDay}-${endDate}`
  }
}
