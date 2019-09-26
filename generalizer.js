let messagesJSON = require("./messages/message_1.json");
// const fs = require("fs");
// // let messages = JSON.parse(messagesJSON);
// fs.readFile(messagesJSON, (err, data) => {
//   if (err) throw err;
//   else content =JSON.parse(data));
// });
let arr = [];
const onlyme = message => {
  let content = message.content ? message.content : "";

  if (message.sender_name === "Harsh Patel") {
    // let sender = ;
    arr.push({ sender: content });
    // console.log("sender: " + content);
  } else {
    arr.push({ reciever: content });
    // console.log("reciever: " + content);
  }
};
messagesJSON.messages
  .slice()
  .reverse()
  .forEach(message => {
    onlyme(message);
  });
console.log(arr);
