let future = new Date();
startDate = new Date(future.setDate(future.getDate() + 30));

document.getElementById("countdown-date").innerHTML = startDate.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const finalDate = startDate.getTime();

const timer = () => {
  const now = new Date().getTime();
  let diff = finalDate - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // days <= 99 ? days = `0${days}` : days;
  days <= 9 ? days = `00${days}` : days;
  hours <= 9 ? hours = `0${hours}` : hours;
  minutes <= 9 ? minutes = `0${minutes}` : minutes;
  seconds <= 9 ? seconds = `0${seconds}` : seconds;

  document.querySelector('#days').innerHTML = `<span>${days}</span> <span>days</span>`;
  document.querySelector('#hours').innerHTML =  `<span>${hours}</span> <span>hours</span>`;
  document.querySelector('#minutes').innerHTML =  `<span>${minutes}</span> <span>min</span>`;
  document.querySelector('#seconds').innerHTML =  `<span>${seconds}</span> <span>sec</span>`;
  // document.getElementById('countdown-timer').innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
};

timer();
setInterval(timer, 1000);


// console.log(finalDate);