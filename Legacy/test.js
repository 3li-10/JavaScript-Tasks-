let legacy = +window.prompt("Enter Value: ");
let haveWife = window.prompt("Have Wife");

if (haveWife == "yes") {
  let numWifes = +window.prompt(`How Many Wifes Yo Have: `);
  let wifeInheritance = (legacy * 0.125) / numWifes;
  console.log(`Wife Inheritance =  ${wifeInheritance}`);

  let remaining = legacy - wifeInheritance;
  console.log(`What remaining = ${remaining}`);

  let boysNums = window.prompt("How Many Boys");
  let girlsNums = window.prompt("How Many Girls");

  let section = remaining/ 

  console.log(`Boys Inheritance = ${boysInheritance}`);
  console.log(`Girls Inheritance = ${girlInheritance}`);
}
