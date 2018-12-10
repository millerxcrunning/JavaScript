var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];;

  this.getFirstName = function()
  {
    return firstName;
  };

  this.getLastName = function()
  {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  this.setFirstName = function(first){
    firstName = first;
  };

  this.setLastName = function(last){
    lastName = last;
  };

  this.setFullName = function(firstAndLast){
    this.setFirstName(firstAndLast.split(" ")[0]);
    this.setLastName(firstAndLast.split(" ")[1]);
  }

};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
