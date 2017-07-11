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
    var downloadBtn = [function() {
        return {
            // Test Function
            restrict: 'E',
            //template: '<a href="" class="btn btn-primary" ng-click="downloadFile()">Download</a>',
            templateUrl: "/app/ng/view/directives/downloadFile.html",
            scope: true,
            link: function(scope, element, attr) {
                var downloadBtn = element.children()[2];
                var clearBtn = element.children()[3];
                var textBox = element.children()[0];
                // When the download starts, disable the link
                scope.$on('download-start', function() {
                    $jQ(downloadBtn)
                        .attr('disabled', 'disabled');
                });
                // When Download
                scope.$on('downloaded', function(event, data) {
                    // Geneatre Download
                    var dataBlob = new Blob([data], { type: 'application/octet-stream' });
                    var dataUrl = URL.createObjectURL(dataBlob);
                    // Modify Link
                    $jQ(downloadBtn).attr({
                            "href": dataUrl,
                            "ng-click": "",
                            "download": attr.filename
                        })
                        .removeAttr('disabled')
                        .text('Save')
                        .removeClass('btn-primary')
                        .addClass('btn-success');
                    $jQ(textBox)
                        .text(data);
                    // Enable Clear button
                    $jQ(clearBtn)
                        .removeAttr('disabled')
                        .removeClass('btn-default')
                        .addClass('btn-warning');
                    // Overwrite
                    scope.downloadFile = function() {};
                });
                // When Download
                scope.$on('clear', function() {
                    $jQ(downloadBtn).attr({
                            "href": "",
                            "ng-click": "downloadFile()",
                            "download": attr.filename
                        })
                        .removeAttr('disabled')
                        .text('Download')
                        .removeClass('btn-success')
                        .addClass('btn-primary');
                    //Disable Clear
                    $jQ(clearBtn)
                        .attr('disabled', 'disabled')
                        .removeClass('btn-warning')
                        .addClass('btn-default');
                    // Overwrite
                    scope.downloadFile = scope.backup;
                });
            },
            controller: ['$scope', '$attrs', '$http', function($scope, $attrs, $http) {
                $scope.backup = function() {
                    $scope.$emit('download-start');
                    $http.get($attrs.url).then(function(response) {
                        $scope.$emit('downloaded', response.data);
                    });
                };
                $scope.clearFile = function() {
                    $scope.$emit('clear');
                };
                // Register to Scope
                $scope.downloadFile = function() {
                    $scope.$emit('download-start');
                    $http.get($attrs.url).then(function(response) {
                        $scope.$emit('downloaded', response.data);
                    });
                };
            }]
        };
    }];
    // PMFlow Module
    ngStoreDirective('downloadBtn', downloadBtn);
})();