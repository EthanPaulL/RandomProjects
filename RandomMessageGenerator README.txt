Codecademy Random Message Generator


*GOAL 1* 	Output random messages.
			1) create 3 phrases that state countdowns to random days of the month. 1st through the 31st.
			2) will generate a random day of the month and then subtract the current from the random day to tell countdown.
			3) if day is past, state result based on boolean value.

*GOAL 2*	use Git version control on VSC

*GOAL 3*	Use command line

--------------------------


1. 	produce random number 1-31 (randomDate)
2.	produce todays day of the month (now)

3.	create if..elseif to determine ouput.
	(if) If 'randomDate > now'- output:
		a) let 'dateDiff' equals 'now' minus 'randomDate'
		b) interpolated statement saying how many days until the randomDate.
	...

	(else) If false, output statement that says how many days in the past it is.




--------------------------


















*EXTERNAL CODE SNIPPETS USED/INSPIRED*


const xmas95 = new Date();
const day = xmas95.getDate();
console.log(day);