import Contact from '../src/contact.js';

describe('Contact', () => {
  test('should correct create a contact object with three parameters', () => {
      const contact = new Contact("Joe", "Smith", "555-555-5555");
      expect(contact.firstName).toEqual("Joe");
      expect(contact.lastName).toEqual("Smith");
      expect(contact.phoneNumber).toEqual("555-555-5555");
  });
});