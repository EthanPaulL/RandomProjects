// PRACTICE WITH FUNCTIONS & CONDITIONALS
// PRACTICE WITH FUNCTIONS & CONDITIONALS
// PRACTICE WITH FUNCTIONS & CONDITIONALS



const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 9;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return 'Please enter a valid day of the week!';
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  
  const getIdealSleepHours = idealhHours => {
    const idealHours = 10;
    return idealHours * 7;
  }
  
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours;
    const idealSleepHours = getIdealSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log('Congrats! You\'ve gotten the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('Looks like you overslept a bit there, bud. You overslept by ' + ((actualSleepHours()) - (idealSleepHours())) + ' hours.');
    } else {
      console.log('You need more rest. You underslept by ' + ((idealSleepHours()) - (actualSleepHours())) + ' hours. Try getting more tonight.');
    }
  }
  
  
  calculateSleepDebt();
  
  