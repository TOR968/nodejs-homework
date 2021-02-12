import path from "path";
import * as fs from "fs/promises";

const contactsPath = path.join(__dirname, "./db/contacts.json");

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

module.exports.listContacts() = async function () {
  const contacts = await fs.readFile(contactsPath, "utf8");
  console.log("contacts=>", JSON.parse(contacts));
};

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

// module.exports = { listContacts, getContactById, removeContact, addContact };
