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
    var testFactory = [function() {
        console.log("hello");
        return {
            // Test Function
            test: function() {
                console.log("test");
                return "test me";
            }
        };
    }];
    // PMFlow Module
    ngStoreService('testFactory', testFactory);
})();