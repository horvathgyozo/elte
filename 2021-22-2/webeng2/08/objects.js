const address = {
  city: 'Budapest',
  street: 'Pázmány Péter sétány'
};
console.log(address.city);
console.log(address['city']);

class Address {
  city = 'Budapest';
  street = 'diu';
  constructor(city, street) {
    this.city = city;
    this.street = street;
  }
}
const a2 = new Address('aaa', 'bbb');
console.log(a2);