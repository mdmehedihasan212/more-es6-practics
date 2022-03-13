fetch("http://universities.hipolabs.com/search?country=United+States")
    .then(res => res.json())
    .then(data => loadData(data))

const loadData = object => {
    for (const data of object) {
        const universities = data.name;
        console.log(universities);
    }
}