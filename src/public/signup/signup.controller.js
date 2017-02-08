(function(){
	'use strict';

	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['SignUpService'];
	function SignUpController(SignUpService){
		var signUpCtrl = this;

		signUpCtrl.realMenuItem = true;
		signUpCtrl.informationSaved = false;

		signUpCtrl.SignUp = function(){

			SignUpService.getSignUpItem(signUpCtrl.user.favouriteDish)
			.then(function(response){
				signUpCtrl.realMenuItem = true;

				signUpCtrl.user.dishTitle = response.name;
				signUpCtrl.user.dishDescription = response.description;
				signUpCtrl.user.dishImageUrl = SignUpService.getFavouriteDishImageUrl(signUpCtrl.user.favouriteDish);

				SignUpService.signUpUser(signUpCtrl.user);
				signUpCtrl.informationSaved = true;
			})
			.catch(function(){
				signUpCtrl.realMenuItem = false;
				signUpCtrl.informationSaved = false;s
			});

		};
	}
})();
