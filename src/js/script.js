import * as flsFunctions from './modules/functions.js'; // функция для обработки WebP
import Customizator from './customizator.js';


window.addEventListener('DOMContentLoaded', () => {

	flsFunctions.isWebp(); // функция для обработки WebP

	const panel = new Customizator();
	panel.render();

});