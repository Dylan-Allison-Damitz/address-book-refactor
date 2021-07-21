import AddressBook from '../src/address.js';

describe('AddressBook', () => {

  test('should correctly hold one contact for one input', () => {
      const location = new AddressBook();
      expect(location.contacts).toEqual({});
  });
});