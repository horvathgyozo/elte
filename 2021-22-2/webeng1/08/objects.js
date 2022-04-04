const address = {
  city: 'Budapest',
  street: 'Pázmány Péter sétány'
};
console.log(address.city);
console.log(address['city']);

class Address {
  city = 'Budapest'
  street = 'xwcv'
  constructor(city, street) {
    this.city = city
    this.street = street
  }
}
const address2 = new Address('aaa', 'bbb');
console.log(address2);