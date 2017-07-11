/*                                            *\
** ------------------------------------------ **
**      Proxi -- Smart Document System        **
** ------------------------------------------ **
**  Copyright (c) 2017 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

// Register Service
(function() {
    // Controller Code
    var testService = ['$http', function($http) {
        console.log("hello");
        // Test Function
        this.test = function() {
            console.log("test");
            return "test me";
        };
        // Fetch
        $http({
            url: "/",
            method: "GET"
        }).then(function(res) {
            console.log(res);
        })
    }];
    // PMFlow Module
    ngStoreService('testService', testService);
})();