const address = {
  city: 'Budapest',
  street: 'Pázmány Péter sétány'  
};
console.log(address.city);
console.log(address['city']);

class Address {
  city = 'Budapest'
  street = 'Pázmány'
  constructor(city, street) {
    this.city = city
    this.street = street
  }
}
const a = new Address('aaa', 'bbb');
console.log(a);