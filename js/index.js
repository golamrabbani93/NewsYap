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
         <a onclick="loadNewscategory('${data.category_id}')" class="nav-link mx-3" aria-current="page" href="#">${data.category_name}</a>
        `;

		categoryContainer.appendChild(li);
	});
};
// *load All News category by categories id
const loadNewscategory = async (id) => {
	const url = ` https://openapi.programming-hero.com/api/news/category/${id}`;

	try {
		const res = await fetch(url);
		const datas = await res.json();
		console.log(datas.data);
	} catch (error) {
		console.log(error);
	}
};
loadNewscategory('01');
