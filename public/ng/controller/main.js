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

// Register Controller
(function() {
    // Controller Code
    var mainCtrl = ['$scope', 'testService', 'testFactory', function($scope, testService, testFactory) {
        this.test = "hello";
        testService.test();
        testFactory.test();
    }];
    // PMFlow Module
    ngStoreController('main', mainCtrl);
})();