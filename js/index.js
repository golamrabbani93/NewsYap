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
