// *load category api
const loadCategory = async () => {
	const url = 'https://openapi.programming-hero.com/api/news/categories';
	try {
		const res = await fetch(url);
		const datas = await res.json();
		displayCategory(datas.data.news_category);
	} catch (error) {
		console.log(error);
	}
};
loadCategory();

// *display category function
const displayCategory = (datas) => {
	// *find category Container
	const categoryContainer = document.getElementById('category-box');
	datas.forEach((data) => {
		// *create li Element
		const li = document.createElement('li');
		li.innerHTML = `
         <a onclick="loadNewscategory('${data.category_id}','${data.category_name}')" class="nav-link mx-3" aria-current="page" href="#">${data.category_name}</a>
        `;
		categoryContainer.appendChild(li);
	});
};
// *load All News category by categories id
// *create spinner Functio

const loadNewscategory = async (id, name) => {
	const url = ` https://openapi.programming-hero.com/api/news/category/${id}`;

	try {
		const res = await fetch(url);
		const datas = await res.json();
		displayNewsItem(datas.data, name);
	} catch (error) {
		console.log(error);
	}
};
loadNewscategory('01', 'Breaking News');

const displayNewsItem = (datas, name) => {
	// *Display News Item Length
	const lengthContainer = document.getElementById('category-length');
	lengthContainer.textContent = '';
	const lengthText = document.createElement('h3');
	lengthText.innerHTML = `
        <span class="color-primary">${name}:</span> ${datas.length} News Found
    `;
	lengthContainer.appendChild(lengthText);

	// *news item dynamic starts
	const cardContainer = document.getElementById('card-container');
	cardContainer.textContent = '';

	datas.forEach((data) => {
		// *create single-card
		const card = document.createElement('div');
		card.classList.add('card');
		card.innerHTML = `
        <div class="row g-0">
            <div class="col-md-2">
                <img
                    src="${data.thumbnail_url}"
                    class="img-fluid rounded-start"
                    alt="..."
                />
            </div>
            <div class="col-md-10">
                <div class="card-body p-3">
                    <h5 class="card-title fw-700">${data.title}</h5>
                    <p class="card-text justify-text color-gray">${data.details.slice(0, 201)}</p>
                    <p class="card-text justify-text color-gray">
                    ${data.details.slice(200, 300)}....</p>
                    <div class="post-details d-flex justify-content-between align-items-center">
                        <!-- *author Details -->
                        <div class="author d-flex align-items-center">
                            <div class="author-img">
                                <img src="${data.author.img}" alt=""/>
                            </div>
                            <div class="author-details ms-2">
                                <h4 class="font-16 m-0 mb-1">
                                ${data.author.name ? data.author.name : 'No data'}</h4>
                                <h4 class="font-16 color-gray">${data.author.published_date}</h4>
                            </div>
                        </div>
                        <!-- *total viwes -->
                        <div class="views">
                            <span class="fw-700"><i class="fa-regular fa-eye"></i> ${
															data.total_view
														}</span>
                        </div>
                        <!-- *total viwes -->
                        <div class="rating">
                            <span class="fw-700">
                                <i class="fa-regular fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i
                            ></span>
                        </div>
                        <div class="details-btn">
                            <button class="btn"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
		cardContainer.appendChild(card);
	});
};
