function timer(className, deadline = "2026-01-01") {

  //const deadline = "2025-01-01";

  // добавить фэйковое время
  // function getDeadline() {
  //   const now = new Date();
  //   const deadlineTime = new Date(now.getTime() + 72 * 60 * 1000 * 60);
  //   const year = deadlineTime.getFullYear();
  //   const month = String(deadlineTime.getMonth() + 1).padStart(2, '0');
  //   const day = String(deadlineTime.getDate()).padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // };
  //deadline = getDeadline();


  //const deadline = getDeadline();

  //console.log(getDeadline());

  function getTimeData(endtime) {
    let days, hours, minutes, seconds;
    const total = Date.parse(endtime) - Date.parse(new Date());

    //console.log(Date.parse(new Date()));

    if (total <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(total / (1000 * 60 * 60 * 24));
      hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((total / (1000 * 60)) % 60);
      seconds = Math.floor((total / 1000) % 60);
    }
    return {
      'total': total,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // function getZerroPrefix(num) {
  //   if (num >= 0 && num < 10) {
  //     return `0${num}`;
  //   } else {
  //     return num;
  //   }
  // }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock(); // Сразу обновляем таймер при запуске

    function updateClock() {
      const objTimeData = getTimeData(endtime);

      // days.innerHTML = getZerroPrefix(objTimeData.days);
      // hours.innerHTML = getZerroPrefix(objTimeData.hours);
      // minutes.innerHTML = getZerroPrefix(objTimeData.minutes);
      // seconds.innerHTML = getZerroPrefix(objTimeData.seconds);
      days.innerHTML = objTimeData.days;
      hours.innerHTML = objTimeData.hours;
      minutes.innerHTML = objTimeData.minutes;
      seconds.innerHTML = objTimeData.seconds;

      if (objTimeData.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(className, deadline);
}

export default timer;