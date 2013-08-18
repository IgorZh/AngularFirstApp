function TaskTapeCtrl($scope, Task) {
    //$scope.tasks = [
    //    { id: 1, name: "some task", type: "task", description: "do this" },
    //    { id: 2, name: "other task", type: "task", description: "do this" },
    //    { id: 2, name: "another task", type: "notification", description: "do this" }
    //];
    $scope.tasks = Task.query();
    
    $scope.$watchCollection("tasks", function (newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
    });
}