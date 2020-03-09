function convertTime(str) {
  let hours = Number(str.substring(0, 2));
  let ampm = str.substring(str.length - 2, str.length);

  if (hours == 12 && ampm == "AM") {
    hours = "00";
  } else if (hours < 12 && ampm == "PM") {
    hours += 12;
  } else if (hours < 12 && ampm == "PM") {
    hours = str.substring(0, 2);
  }

  return hours + str.substring(2, str.length - 2);
}
