const { readFile } = require("fs"); // async

console.log('start a first task');

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("err:", err);
    return;
  }

  console.log(result);
  console.log('complete a first task')
})
console.log('start a next task')