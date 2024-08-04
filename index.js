var program = true;
var valA;
var valB;
var valC;
var discr;
var root1;
var root2;

while(program){
  console.log("Discriminant / Quadratic Formula Program");
  console.log("Please input a value for a, b, and c");
  valA = prompt("a ");
  valB = prompt("b ");
  valC = prompt("c ");

  discr = valB^2 - 4 * valA * valC;

  console.log(discr);
  
  if(discr < 0){
    root1 = -valB + Math.sqrt(valB^2 - 4 * valA * valC)
  }
  else if(discr == 0){
    
  }
  else {
    console.log("No Real Solutions");
  }
  
}
