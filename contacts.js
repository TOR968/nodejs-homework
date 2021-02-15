const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);
      console.table(parsedData);
    } catch (error) {
      console.log('listCotnacts error:', err);
    }
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);

      const findContactById = parsedData.find(item => item.id === contactId);
      console.log('Contact by id:', findContactById);
    } catch (error) {
      console.log('getContactById error:', err);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);
      const deleteContact = parsedData.filter(item => item.id !== contactId);

      console.table(deleteContact);
      fs.writeFile(contactsPath, JSON.stringify(deleteContact), () => {
        console.log('Contact was removed');
      });
      return deleteContact;
    } catch (error) {
      console.log('remuveContact error:', err);
    }
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);
      const newContact = { name, email, phone };

      parsedData.push(newContact);
      console.table(parsedData);

      fs.writeFile(contactsPath, JSON.stringify(parsedData), () => {
        console.log('Contact was added');
      });
    } catch (error) {
      console.log('error:', err);
    }
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
