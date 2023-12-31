const { readFile, writeFile } = require("fs"); // async

console.log('start a first task');

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("err:", err);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("err:", err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
     
      `Here is the result: ${first}, ${second}`,
      (err,result)=>{
        if (err){
          console.log('err;', err);
          return;
        }
        console.log('done with this task!');
      }
    );
  });
});
console.log('starting next task!'); 