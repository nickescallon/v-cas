(function(){
	'use strict'

	angular.module('vCas.controllers.home', [])
	.controller('homeController', homeController);

	function homeController() {
		var Ctrl = this;

		Ctrl.testMessage = 'Home Controller!'
	};
})();
