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

// Angular utilties
var ngUtil = (function() {
    // Storage
    var controllers = [];
    var services = [];
    var components = [];
    var directives = [];

    return {
        ngStore: function(name, type, obj) {
            switch (type) {
                case "ctrl":
                    controllers[name] = obj;
                    break;
                case "comp":
                    components[name] = obj;
                    break;
                case "dir":
                    directives[name] = obj;
                    break;
                case "serv":
                    services[name] = obj;
                    break;
                default:
                    break;
            }
        },
        ngLoad: function(name, type) {
            var retObj = null;
            switch (type) {
                case "ctrl":
                    retObj = controllers[name];
                    break;
                case "comp":
                    retObj = components[name];
                    break;
                case "dir":
                    retObj = directives[name];
                    break;
                case "serv":
                    retObj = services[name];
                    break;
                default:
                    break;
            }
            return retObj;
        }
    }
})();
// Load Shortcuts
var ngLoadService = function(name) {
    return ngUtil.ngLoad(name, "serv");
};
var ngLoadDirective = function(name) {
    return ngUtil.ngLoad(name, "dir");
};
var ngLoadComponent = function(name) {
    return ngUtil.ngLoad(name, "comp");
};
var ngLoadController = function(name) {
    return ngUtil.ngLoad(name, "ctrl");
};
// Store Shortcuts
var ngStoreService = function(name, obj) {
    return ngUtil.ngStore(name, "serv", obj);
};
var ngStoreDirective = function(name, obj) {
    return ngUtil.ngStore(name, "dir", obj);
};
var ngStoreComponent = function(name, obj) {
    return ngUtil.ngStore(name, "comp", obj);
};
var ngStoreController = function(name, obj) {
    return ngUtil.ngStore(name, "ctrl", obj);
};