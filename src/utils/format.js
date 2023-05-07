import dayjs from "dayjs";
export function formatNumber(number) {
  if (!number) return 0;
  return number.toLocaleString();
}

export function formatDatetime(date, format = "DD/MM/YYYY") {
  if (!date) return "";
  return dayjs(date).format(format);
}
