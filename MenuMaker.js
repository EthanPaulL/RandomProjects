// PRACTICE WITH OBJECTS & GETTER/SETTERS
// PRACTICE WITH OBJECTS & GETTER/SETTERS
// PRACTICE WITH OBJECTS & GETTER/SETTERS

// Purpose: to show the special of the day based on user input.

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck.charAt(0).toUpperCase() + mealToCheck.slice(1);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today\'s Special is ${this._meal} for $${this._price}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  menu.meal = 'Apple Pie';
  menu.price = 45;
  
  
  console.log(menu.todaysSpecial);