class SideNav {

	constructor() {

		this.showButtonEL = document.querySelector('.showIconMenu');
		this.hideButtonEL = document.querySelector('.hideIconMenu');
		this.sideNavEl = document.querySelector('.contenedorNumero1');
		this.sideNavConteinerEl = document.querySelector('.contenedorNumero2');

		this.showSideNav = this.showSideNav.bind(this);  /*volver a leer de bind que me re olvide que hacia esto*/
		this.hideSideNav = this.hideSideNav.bind(this);  /*volver a leer de bind que me re olvide que hacia esto*/
		this.blockClicks = this.blockClicks.bind(this);  /*volver a leer de bind que me re olvide que hacia esto*/

		this.addEventListeners ()

	}

	addEventListeners (){

		this.showButtonEL.addEventListener('click', this.showSideNav);
		this.hideButtonEL.addEventListener('click', this.hideSideNav);
		this.sideNavEl.addEventListener('click', this.hideSideNav);
		this.sideNavConteinerEl.addEventListener('click', this.blockClicks);
	}

	blockClicks(evt){

		evt.stopPropagation();
	}

	showSideNav(){

		this.sideNavEl.classList.add('contenedorNumero1--visible');
	}

	hideSideNav(){

		this.sideNavEl.classList.remove('contenedorNumero1--visible');
	}

}

new SideNav();

//temperatura

const lat = -24.1945700;
const long = -65.2971200;

const proxy = 'https://cors-anywhere.herokuapp.com/'
const url = `${proxy}https://api.darksky.net/forecast/689cd272256d25690438e78037707e92/${lat},${long}`;

fetch(url)
	.then(response => {
		return response.json();
	})
	.then(data => {
		let farenheit = data.currently.temperature;
		let celcius = Math.round((farenheit - 32) * 5/9);

		const tempLabel = document.getElementById('temperature');
		tempLabel.innerHTML = celcius + "°C";
	})
//dolar