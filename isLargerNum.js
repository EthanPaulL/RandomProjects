const num1 = 30;
const num2 = 40;

function whichIsLarger(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}.`);
    } else if (num1 < num2) {
        console.log(`${num2} is larger than ${num1}.`);
    } else {
        console.log('Both numbers are equal!');
    }
};

whichIsLarger(num1, num2);