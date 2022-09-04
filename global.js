//global object
//console.log(global);

//dont have to type 'global'
global.setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

//run every 1000ms until clearInterval
const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
