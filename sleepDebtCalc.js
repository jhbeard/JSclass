const getSleepHours = day => {

  switch(day) {
    case 'monday':
     return 8;
     break;
     case 'tuesday':
     return 8;
     break;
     case 'wednesday':
     return 8;
     break;
     case 'thursday':
     return 8;
     break;
     case 'friday':
     return 8;
     break;
     case 'saturday':
     return 8;
     break;
     case 'sunday':
     return 8;
     break;
     default:
     return "Error!";
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 7.5;
  return idealhours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours)
{
  console.log('You got the perfect amount of sleep!');
}
else if(actualSleepHours > idealSleepHours) {
  console.log('You slept too much.');
}
else if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
else {
  console.log('Error! Something went wrong, check your code.');
}

};
console.log(calculateSleepDebt());
