export const conversions = {
  numberFomat: number => {
    return Number(parseFloat(number).toFixed(2)).toLocaleString('en', {
      minimumFractionDigits: 2,
    });
  },
  // prettier-ignore
  timeFormat: time => {
    
    time *= 60;
    let years = Math.floor(time / (3600 * 24 * 30 * 12));
    let months = Math.floor((time % (3600 * 24 * 30 * 12)) / (3600 * 24 * 30));
    let days = Math.floor((time % (3600 * 24 * 30)) / (3600 * 24));
    let hours = Math.floor((time % (3600 * 24)) / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);
    let yearsDisplay =
      years > 0 ? years + (years === 1 ? ' year, ' : ' years, ') : '';
    let monthsDisplay =
      months > 0 ? months + (months === 1 ? ' months, ' : ' months, ') : '';
    let daysDisplay =
      days > 0 ? days + (days === 1 ? ' day, ' : ' days, ') : '';
    let hoursDisplay =
      hours > 0 ? hours + (hours === 1 ? ' hour, ' : ' hours, ') : '';
    let minutesDisplay =
      minutes > 0 ? minutes + (minutes === 1 ? ' minute, ' : ' minutes, ') : '';
    let secondsDisplay =
      seconds > 0 ? seconds + (seconds === 1 ? ' second' : ' seconds') : '';
    return (
      yearsDisplay +
      monthsDisplay +
      daysDisplay +
      hoursDisplay +
      minutesDisplay +
      secondsDisplay
    );
  },

  timeFormatRuntime: time => {
    time *= 60;
    let hours = Math.floor((time % (3600 * 24)) / 3600)
      .toString()
      .padStart(2, '0');
    let minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    let seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
  },
};
