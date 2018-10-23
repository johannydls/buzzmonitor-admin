angular.module('buzzmonitor')

.controller('adminToolsCtrl', function($scope, adminToolsService) {
    
    $scope.users = [];
    $scope.userLoggedIn = null;

    $scope.user = new adminToolsService();

    $scope.openTab = 'user';

    $scope.setTab = (nameTab) => {
        $scope.openTab = nameTab;
    }
    $scope.currentTab = (nameTab) => {
        return $scope.openTab === nameTab;
    }

    $scope.loadingCurrent2 = {
        backgroundColor: "orange"
    }

    let findUsers = () => {
        adminToolsService.query((users) => {
            $scope.users = users;
            $scope.userLoggedIn = users[0];
        },
        (error) => {
            console.log("Could not get a list of users");
            console.log(error);
        });
    };

    findUsers();

    $scope.addExtra = () => {
        $scope.userLoggedIn.user_properties.posts_limit++;
    }
    
});