var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user);

fs.appendFile(
  "greeting.txt",
  "Hello, world!" + user.username + "!" + "!\n",
  () => {
    console.log("File is created");
  }
);
