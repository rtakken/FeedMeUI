(function() {
  'use strict';

  angular
    .module('feedMe')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pods/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/pods/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/pods/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state('location', {
        url: '/location',
        templateUrl: 'app/pods/location/location.html',
        controller: 'LocationController',
        controllerAs: 'location'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
