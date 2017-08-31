(function () {
  angular
      .module('legacy')
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cat', {
              url        : "/angularjs",
              templateUrl: './app/counter.html',
              controller : 'CounterCtrl'
            });

        $urlRouterProvider.otherwise(function ($injector, $location) {
          var path = $location.path();
          console.log("The AngularJS app recieved a path it couldn't resolve, posting to parent iframe see if it can handle the path " + path);
          // Parent is always the parent iframe
          parent.postMessage({navigateTo: path}, "*");
        });
      });
})();

/*
TODO:

- Create Angular app with counter and dog page
- When you click counter it falls back to otherwise route and loads IframeComponent
- When you click dog from ng takes you to dog
- When you click dog from ng1 takes you to dog in Angular by posting iframe
https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
https://davidwalsh.name/window-iframe

 */