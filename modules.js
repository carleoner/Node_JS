//people log - array
const xyz = require("./people");

console.log(xyz);
console.log(xyz.people, xyz.ages);

//extract only people
const { people } = require("./people");
console.log(people);

///////////////////////////////
///////////////////////////////
//built in functionalities
const os = require("os");
console.log(os.platform(), os.homedir());
