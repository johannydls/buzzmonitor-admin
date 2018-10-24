angular.module('buzzmonitor')

.controller('adminToolsCtrl', function($scope, adminToolsService) {
    
    $scope.users = [];
    $scope.userLoggedIn = null;
    $scope.userLoggedPosts = 0;

    $scope.user = new adminToolsService();

    $scope.openTab = 'user';

    $scope.setTab = (nameTab) => {
        $scope.openTab = nameTab;
    }
    $scope.currentTab = (nameTab) => {
        return $scope.openTab === nameTab;
    }

    $scope.loadingCurrent2 = {
        backgroundColor: "#db6d14"
    }

    let findUsers = () => {
        adminToolsService.query((users) => {
            $scope.users = users;
            $scope.userLoggedIn = users[0];

            $scope.userLoggedIn.user_data.brands.forEach(brand => {
                $scope.userLoggedPosts += brand.collected_posts;
            });
        },
        (error) => {
            console.log("Could not get a list of users");
            console.log(error);
        });
    };

    findUsers();

    $scope.extra_posts = 0;

    $scope.addExtra = () => {
        $scope.userLoggedIn.user_properties.posts_limit += $scope.extra_posts;
        $scope.extra_posts = '';
    }
    
});