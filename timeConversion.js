// hackerrank

const timeConversion = (s) => {
  let hour = parseInt(s.slice(0,2));
  let min = parseInt(s.slice(3,5));
  let sec = parseInt(s.slice(6,8));
  const meridian = s.slice(8, 10);

  if (meridian === "PM" && hour !== 12) {
    hour += 12;
  }
  if (meridian === "AM" && hour === 12) {
    hour = 0;
  }

  return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};