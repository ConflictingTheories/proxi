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


// Register Directive
(function() {
    // Controller Code
    var dragNDrop = ['$document', function($document) {
        return {
            link: function(scope, element, attr) {
                var startX = 0,
                    startY = 0,
                    x = 0,
                    y = 0;

                element.css({
                    position: 'relative',
                    border: '1px solid red',
                    backgroundColor: 'lightgrey',
                    cursor: 'pointer'
                });

                element.on('mousedown', function(event) {
                    // Prevent default dragging of selected content
                    event.preventDefault();
                    startX = event.pageX - x;
                    startY = event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove(event) {
                    y = event.pageY - startY;
                    x = event.pageX - startX;
                    element.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                }

                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }
            }
        };
    }];
    // PMFlow Module
    ngStoreDirective('dragNDrop', dragNDrop);
})();