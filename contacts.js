const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// fs.readFile(contactsPath)
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log(err.message));
// // fs.readFile(contactsPath, "utf8", (err, data) => {
// //   if (err) throw err;

// //   console.log(data);
// // });

// fs.writeFile(contactsPath, "File Content", "utf8", (err) => {
//   if (err) throw err;

//   console.log("Done");
// });

function listContacts() {
  fs.readFile(contactsPath, { encoding: "utf-8" }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);
      console.table(parsedData);
    } catch (error) {
      console.log("listCotnacts error:", err);
    }
  });
}

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = { listContacts, getContactById, removeContact, addContact };
