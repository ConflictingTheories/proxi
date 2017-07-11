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

(function(angular) {
    // PMFlow Module
    var app = angular.module('proxi', ['ui.router']);
    // Load Services
    app.service('testService', ngLoadService('testService'));
    app.factory('testFactory', ngLoadService('testFactory'));
    // Load Controllers
    app.controller('main', ngLoadController('main'));
    // Load Directives
    app.directive('dragNDrop', ngLoadDirective('dragNDrop'));
    app.directive('downloadBtn', ngLoadDirective('downloadBtn'));
    // Load Components

})(window.angular);