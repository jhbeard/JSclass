//empty menu object.
//d a courses property to your menu object and set its value to an empty object
//Create three properties inside the courses object called appetizers, mains, and desserts
const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
//step 4
addDishToCourse (courseName, dishName, dishPrice){
 //step 5
  const dish = {
    name: dishName,
    price: dishPrice,
};
// step 5+
return this.courses[courseName].push(dish)
},
//step 6
getRandomDishFromCourse(courseName) {
 //step 7
  const dishes = this.courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
//Step 8
generateRandomMeal () {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  constant totalPrice = appetizer.price + main.price + dessert.price;
  return 'Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}';
}
};
menu.addDishToCourse('appetizers', 'shrimp', 7.00)
menu.addDishToCourse('appetizers', 'hushpuppies', 8.00)
menu.addDishToCourse('appetizers', 'oysters', 9.00)

menu.addDishToCourse('mains', 'steak', 14.00)
menu.addDishToCourse('mains', 'lobster', 24.00)
menu.addDishToCourse('mains', 'chicken', 34.00)

menu.addDishToCourse('desserts', 'pie', 7.00)
menu.addDishToCourse('desserts', 'cake', 8.00)
menu.addDishToCourse('desserts', 'chocolate', 9.00)

const meal = menu.generateRandomMeal();
console.log(meal);








//const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],

addDishToCourse (courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice,
};
return this.courses[courseName].push(dish)
},
getRandomDishFromCourse(courseName) {
  const dishes = this.courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal () {
  const appetizers = this.getRandomDishFromCourse('appetizers');
  const appetizers = this.getRandomDishFromCourse('mains');
  const appetizers = this.getRandomDishFromCourse('desserts');
  constant totalPrice = appetizer.price + main.price + dessert.price;
  return 'Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}';
}
};
menu.addDishToCourse('appetizers', 'shrimp', 7.00)
menu.addDishToCourse('appetizers', 'hushpuppies', 8.00)
menu.addDishToCourse('appetizers', 'oysters', 9.00)

menu.addDishToCourse('mains', 'steak', 14.00)
menu.addDishToCourse('mains', 'lobster', 24.00)
menu.addDishToCourse('mains', 'chicken', 34.00)

menu.addDishToCourse('desserts', 'pie', 7.00)
menu.addDishToCourse('desserts', 'cake', 8.00)
menu.addDishToCourse('desserts', 'chocolate', 9.00)

const meal = menu.generateRandomMeal();
console.log(meal);
