// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  let CasinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
  console.log(CasinoRoyale);
  
  let movieList = [
    new Movie("movie1", "studio"),
    new Movie("movie2", "studio", "PG14"),
    new Movie("movie3", "studio"),
    new Movie("movie4", "studio", "PG12"),
    new Movie("movie5", "studio"),
  ];
  
  let getPG = function (movieList) {
    return movieList.filter((movie) => movie.rating === "PG");
  };
  let filtered = getPG(movieList);
  console.log(filtered);

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
let log = (...data) => console.log(...data);
class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  getColor() {
    return this.color;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    return `Circle [${this.radius}, ${this.color}]`;
  }
  getArea() {
    return 2 * Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return Math.PI * this.radius;
  }
}

let myCircle = new Circle();
log(myCircle);
myCircle.setRadius(5);
myCircle.setColor("blue");
log(myCircle.toString());
log(myCircle.getArea());
log(myCircle.getCircumference());

// 3. Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, contactNo, emailID) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.contactNo = contactNo;
      this.emailID = emailID;
    }
  }
  
  let person = new Person(
    "Meyazhagan",
    "C N",
    "22",
    "8667283263",
    "meyazhagan.ofcl@gmail.com"
  );
  console.log(person);

// 4. write a class to calculate uber price.

class Uber {
    constructor(ratePerKm) {
      this.ratePerKm = ratePerKm;
    }
    calculatePrice(distance) {
      return distance * this.ratePerKm;
    }
  }
  
  var uber = new Uber(15);
  var price = uber.calculatePrice(100);
  console.log(price);