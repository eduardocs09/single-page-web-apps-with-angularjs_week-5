(function(){
	'use strict';

	angular.module('common')
	.service('SignUpService', SignUpService);

	SignUpService.$inject = ['$http', 'ApiPath'];
	function SignUpService($http, ApiPath){
		var service = this;
		var signedUpUser;

		service.getSignUpItem = function(short_name){
			return $http({
				method: "GET",
        url: (ApiPath + "/menu_items/" + short_name + ".json")
    	})
			.then(function(response){
				return response.data;
			})
			.catch(function(ex){
				console.log("Menu item not found!");
				throw ex;
			});
		};

		service.signUpUser = function(user){
			this.signedUpUser = user;
		};

		service.getSignedUpUser = function(){
			if (this != null && this != undefined){
				return this.signedUpUser;
			}
			else {
				return null;
			}
		};

		service.getFavouriteDishImageUrl=function(short_name){
			return ApiPath + "/images/" + short_name + ".jpg";
		};
	};
})();
