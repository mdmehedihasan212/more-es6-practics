fetch("http://universities.hipolabs.com/search?country=United+States")
    .then(res => res.json())
    .then(data => loadData(data))

const loadData = object => {
    const displayData = document.getElementById('university-list');
    for (const data of object) {
        const { country, name, web_pages } = data;
        // console.log(country, name, web_pages);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-50">
  <div class="card-body">
    <h3 class="card-title">${name}</h3>
    <h5 class="card-text">${country}</h5>
    <a href="${web_pages}" class="btn btn-primary">Web Pages</a>
  </div>
</div>
        `;
        displayData.appendChild(div);

    }
}

