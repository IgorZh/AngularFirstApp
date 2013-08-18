function PanelCtrl($scope) {
    $scope.isVisible = true;

    $scope.toggle = function() {
        $scope.isVisible = !$scope.isVisible;
    };
}