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
};
