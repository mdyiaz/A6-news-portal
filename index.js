const loadData = () => {
    const url = (`https://openapi.programming-hero.com/api/news/categories`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsNavbar(data.data.news_category));
}


const displayNewsNavbar = data => {
    const newsField = document.getElementById('ul-field');

    data.forEach((catagories) => {

        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
        ${catagories.category_name}`;

        newsField.appendChild(li);

    });
}

loadData();