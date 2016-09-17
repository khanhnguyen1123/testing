(function(){
	angular.module('TimeWaste',['ui.router', 'ngFileUpload'])
		.config(function($stateProvider,$urlRouterProvider){
			
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('signup',{
					url: '/signup',
					templateUrl: "public/signup/signup.html",
					controller: 'SignupController'
				})
				.state('editProfile',{
					url: '/edit-profile',
					templateUrl: 'public/profile/edit-profile-view.html',
					controller: 'EditProfileController',
				})
				.state('main',{
					url: '/',
					templateUrl: 'public/main/main.html',
					controller: 'MainController'

				})
						.state('follow', {
							url: "/follow-users",
							templateUrl: "public/follow/follow.html",
							controller: "FollowController"
						})
	  })
}());