const loadData = () => {
  const url = (`https://openapi.programming-hero.com/api/news/categories`);
  fetch(url)
    .then(res => res.json())
    .then(data => displayNewsNavbar(data.data.news_category));
}

loadData();


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
    //console.log(details);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${details.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${details.title}</h5>
                <p class="card-text">${details.details}</p>

                <div class="d-flex justify-content-between">
                    <div>
                        <img src="${details.author.img}" height="40px" width="40px" class="img-fluid rounded "
                            alt="...">
                        <div>
                            <p class="card-text"><small class="text-muted">${details.author.name}</small></p>
                            <p><small class="text-muted"> ${details.author.published_date}</small></p>
                        </div>
                    </div>
                    <div><i class="fa-solid fa-eye"></i> ${details.total_view}</div>
                    <div>
                        <div><button onclick="loadNewsDetails('${details._id}')" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">See News Details</button>
                        </div>
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


const loadNewsDetails = id => {
  //console.log(id);
  const url = ` https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayNewsDetails(data.data))

}



const displayNewsDetails = news => {
  console.log(news);
  const modalSection = document.getElementById('modal-card');

  news.forEach(newsDetails => {
    //const div = document.createElement('div');
    modalSection.innerHTML = `
    
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${newsDetails.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${newsDetails.thumbnail_url}" class="img-fluid rounded-start mb-3" alt="...">
             <p class="card-text">${newsDetails.details}</p>

        <div>
          <div>
          <img src="${newsDetails.author.img}" height="40px" width="40px" class="img-fluid rounded "
              alt="...">
          <div>
              <p class="card-text"><small class="text-muted">${newsDetails.author.name}</small></p>
              <p><small class="text-muted"> ${newsDetails.author.published_date}</small></p>
              </div>
             </div>
            <div><i class="fa-solid fa-eye"></i> ${newsDetails.total_view}</div>
          </div>   

        </div>

        
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
    </div>

    `;

    //modalSection.appendChild(div);


  });

}

















