const number1 = [12, 31, 43, 24, 43];
const sum = [...number1];
console.log(sum);

// distructuring object spread operation
const watch = {
    name: 'apple12',
    brand: 'Apple',
    color: 'golden',
    price: 1500
};
const { name } = watch;
console.log(name);

// rest
// const { name, ...rest } = watch;
// console.log(rest);

// fuctional 
const desi = ({ name, brand }) => {
    console.log(name, brand);
}
desi(watch);

// spread operator array or object
const numberOne = [12, 31, 42, 45, 55];
const numberTwo = {
    name: 'hero',
    age: 22
};

const numArray = [...numberOne];
console.log(numArray);

const numObject = { ...watch, warrenty: '1 years' };
console.log(numObject);