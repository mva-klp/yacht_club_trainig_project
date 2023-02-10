let pageTheme = document.querySelector('.page');
//скрипт переключения темы
let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function(){
	themeButtonLight.classList.remove('active');
	themeButtonDark.classList.add('active');
	pageTheme.classList.add('dark');
};

themeButtonLight.onclick = function(){
	themeButtonDark.classList.remove('active');
	themeButtonLight.classList.add('active');
	pageTheme.classList.remove('dark');
};

//скрипт переключения шрифтов
let fontButtonSanSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSanSerif.onclick = function(){
	fontButtonSerif.classList.remove('active');
	fontButtonSanSerif.classList.add('active');
	pageTheme.classList.remove('serif');
};

fontButtonSerif.onclick = function(){
	fontButtonSanSerif.classList.remove('active');
	fontButtonSerif.classList.add('active');
	pageTheme.classList.add('serif');
};

//скрипт разворачивания статей
let articleList = document.querySelectorAll('.blog-article.short');

for (let article of articleList) {
	article.querySelector('.more').onclick = function(){
		article.classList.remove('short');
	};
};

//скрипт смены раскладки карточек
let cards = document.querySelector('.cards');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');

cardViewButtonGrid.onclick = function(){
	cardViewButtonList.classList.remove('active');
	cardViewButtonGrid.classList.add('active');
	cards.classList.remove('list');
};

cardViewButtonList.onclick = function(){
	cardViewButtonGrid.classList.remove('active');
	cardViewButtonList.classList.add('active');
	cards.classList.add('list');
};

//скрипт галереи
let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list a');

for (let activeSmallPhoto of previewList){
	activeSmallPhoto.onclick = function(evt){
		evt.preventDefault();
		activePhoto.src = activeSmallPhoto.href;
		let activeItem = document.querySelector('.active-item');
		activeItem.classList.remove('active-item');
		activeSmallPhoto.classList.add('active-item');
	}
};