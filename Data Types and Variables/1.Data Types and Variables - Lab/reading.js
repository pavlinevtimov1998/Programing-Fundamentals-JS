function reading(numbPages, hourPages, numbDays) {
  let totalTime = numbPages / hourPages;
  let requaredHoursPerDay = totalTime / numbDays;

  console.log(requaredHoursPerDay);
}
reading(212, 20, 2);
