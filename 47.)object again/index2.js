const shivam = {
    name: 'das',
    price: '20 Rupees',
    isAvailable: true
};

console.log(Object.getOwnPropertyDescriptor(shivam, "name"));

/* Output
{ value: 'das', writable: true, enumerable: true, configurable: true }
*/

Object.defineProperty(shivam, 'name', {
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(shivam, "name"));
