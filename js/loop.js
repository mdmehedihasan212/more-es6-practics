const dreamGirl = [
    {
        dream1: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [
                            { name: "rofik" },
                            { name: "jobbar" },
                            { name: "salam" },
                            { name: "borkot" },
                            undefined,
                        ],
                    },
                },
                { instagram: "https://www.instagram.com/" },
                { twitter: "https://twitter.com/" },
                { github: "https://github.com/" },
                { phone: ["01254823212", "02152457"] },
            ],
        },
    },
];

const object = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;

// for of loop
for (const key of object) {
    console.log(key.name);
};

const numbers1 = [1, 2, 4, 6, 5, 10];
const newArray = [];
for (let i = 0; i < numbers1.length; i++) {
    const element = numbers1[i];
    const result = sum(element);
    newArray.push(result);
}

console.log(newArray);