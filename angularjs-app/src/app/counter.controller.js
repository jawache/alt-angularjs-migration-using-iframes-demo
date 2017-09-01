(function () {
  angular
      .module('legacy')
      .controller('CounterCtrl', function ($scope) {
        $scope.counter = parseInt(localStorage.getItem("counter")) || 0;

        $scope.increment = function () {
          $scope.counter += 1;
          console.log("Setting the counter to " + $scope.counter);
          localStorage.setItem("counter", $scope.counter)
        };

        $scope.reset = function () {
          $scope.counter = 0;
          console.log("Setting the counter to " + $scope.counter);
          localStorage.setItem("counter", 0)
        }

      });
})();




