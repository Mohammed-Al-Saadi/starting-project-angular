let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return console.log(this.getWage(baseSalary, overTime, rate)); // 30200
}
