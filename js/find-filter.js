const products = [
    { id: 1, name: "apple", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 124, color: "black" },
    { id: 3, name: "samsung", price: 200, color: "black" },
    { id: 4, name: "samsung2", price: 200, color: "black" },
    { id: 5, name: "lenovo", price: 300, color: "pink" },
    { id: 6, name: "xiaomi", price: 100, color: "pink" },
    { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const filtaring = products.filter((pd) => pd.name === 'apple')
console.log(filtaring);
// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া
const filtarings = products.filter((pds) => pds.name !== 'apple')
console.log(filtarings);

// filter three arguments

const numArray = [1, 2, 3, 4, 5, 6];
const sum = numArray.filter((e, i, j) => {
    console.log(e);
    console.log(i);
    return j > 2;
});
console.log(sum);

// find

const output = products.find((pd) => pd.color === 'black');
console.log(output);