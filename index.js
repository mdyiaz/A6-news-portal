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
        <p onclick="categoriesNews('${catagories.category_id}')" >${catagories.category_name}</p>`;


    newsField.appendChild(li);

  });
}

const categoriesNews = (post) => {
  const url2 = (`https://openapi.programming-hero.com/api/news/category/${post}`);
  fetch(url2)
    .then(res => res.json())
    .then(data => displayCategoriesDetails(data.data))
}

categoriesNews();



const displayCategoriesDetails = (detail) => {
  const newsDetails = document.getElementById('news-details');
  newsDetails.innerHTML = '';
  detail.forEach((details) => {
    console.log(details);
    const div = document.createElement('div');
    div.innerHTML = `
        <div onclick="displayNewsDetails()" class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${details.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${details.title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
              <div>
                 <img src="${details.author.img}" height="40px" width="40px" class="img-fluid rounded " alt="...">
                 <div>
                 
                 <p class="card-text"><small class="text-muted">${details.author.name}</small></p>
                 <p><small class="text-muted"> ${details.author.published_date}</small></p>
                 
                   
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;

    newsDetails.appendChild(div);
  });
}





Load data for 





loadData();