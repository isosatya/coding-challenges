function timeConversion(s) {
  let meridiem = s.slice(8, 10);
  let hour = parseInt(s.slice(0, 2), 10);

  if (meridiem === "AM") {
    if (hour == 12) {
      hour = "00";
    }
  } else {
    if (hour != 12) {
      hour += 12;
    }
  }

  if (hour.toString().length == 1) {
    hour = hour.toString().padStart(2, "0");
    return hour + s.slice(2, 8);
  }

  return hour.toString() + s.slice(2, 8);
}

timeConversion("05:05:45PM");
