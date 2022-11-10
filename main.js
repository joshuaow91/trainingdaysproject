const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {
  let days 
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

const getTrainingDays2 = event2 => {
  let days2 
  if (event === 'Marathon') {
    days2 = 50;
  } else if (event === 'Triathlon') {
    days2 = 100;
  } else if (event === 'Pentathlon') {
    days2 = 200;
  }

  return days2;
  
};

const name = 'Nala';
const name2 = 'Warren';

const logEvent = event => {
  
  console.log(`${name}'s event is: ${event}`);
};

const logEvent2 = event2 => {
console.log(`${name2}'s event is: ${event2}`);
};

const logTime = days => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};

const logTime2 = days2 => {

console.log(`${name2}'s time to train is: ${days2} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

logEvent(event);
logTime(days);

logEvent2(event2);
logTime2(days2);
