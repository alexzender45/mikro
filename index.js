class PhoneBook {
  constructor() {
    this.contacts = [];
  }
  getContact(phoneNumber) {
    return this.contacts.find((contact) => contact.phoneNumber === phoneNumber);
  }
  addContact(contact) {
    const existingContact = this.getContact(contact.phoneNumber);
    if (existingContact) {
      throw new Error(`Contact ${contact.phoneNumber} already exists`);
    } else {
      this.contacts.push(contact);
    }
  }
  getContacts() {
    return this.contacts;
  }
  removeContact(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
  }
  updateContact(name, contact) {
    let index = this.contacts.findIndex((contact) => contact.name === name);
    this.contacts[index] = contact;
  }
  getContactByPhoneNumber(phoneNumber) {
    return this.contacts.find((contact) => contact.phoneNumber === phoneNumber);
  }
  getContactByEmail(email) {
    return this.contacts.find((contact) => contact.email === email);
  }
}

PhoneBook = new PhoneBook();
PhoneBook.addContact({
  name: "John",
  phoneNumber: "+2348023456789",
  email: "alex@gmail.com",
  createdAt: new Date(),
});
PhoneBook.addContact({
  name: "Samuel",
  phoneNumber: "+2348367788878",
  email: "mike@gmail.com",
  createdAt: new Date(),
});
PhoneBook.addContact({
  name: "Hope",
  phoneNumber: "+23487777333444",
  email: "ola@gmail.com",
  createdAt: new Date(),
});
console.log(PhoneBook.getContactByPhoneNumber("+2348023456789"));
console.log(PhoneBook.getContacts());
