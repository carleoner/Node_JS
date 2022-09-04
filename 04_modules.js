//people log - array
const xyz = require("./05_people");

console.log(xyz);
console.log(xyz.people, xyz.ages);

//extract only people
const { people } = require("./05_people");
console.log(people);

///////////////////////////////
///////////////////////////////
//built in functionalities
const os = require("os");
console.log(os.platform(), os.homedir());
