/*
Codecademy Random Message Generator


*GOAL 1* 	Output random messages.
	1) create 3 phrases that state countdowns to random days of the month. 1st through the 31st.
	2) will generate a random day of the month and then subtract the current from the random day to tell countdown.
	3) if day is past, state result based on boolean value.

*GOAL 2*	use Git version control on VSC

*GOAL 3*	Use command line

-------------------------- */



let randomDate = Math.ceil(Math.random() * 29);
// console.log(randomDate);
const currentDay = new Date();
const nowDay = currentDay.getDate();
// console.log(nowDay);
function nowMonth () {
    const currentMonth = new Date();
    switch (currentMonth.getMonth()){
        case 0:
            return 'January';
            break;
        case 1:
            return 'February';
            break;
        case 2:
            return 'March';
            break;
        case 3:
            return 'April';
            break;
        case 4:
            return 'May';
            break;
        case 5:
            return 'June';
            break;
        case 6:
            return 'July';
            break;
        case 7:
            return 'August';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'October';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'December';
            break;
    }
};
// console.log(nowMonth());

function whenIsTheBigDay() {
    if (randomDate > nowDay){
        let dateDiff = randomDate-nowDay;
        return `The big day is coming up! We have ${dateDiff} days until ${nowMonth()} ${randomDate}.`;
    } else if (randomDate < nowDay){
        let dateDiff = nowDay-randomDate;
        return `Time flies! It's been ${dateDiff} days since ${nowMonth()} ${randomDate}.`;
    } else if (randomDate === nowDay){
        return `Today is ${nowMonth()} ${nowDay}. The big day is today!`;
    };
};

console.log(whenIsTheBigDay());